const envelopeRoute = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET ALL Envelopes
envelopeRoute.get("/", async (req, res, next) => {
  const allEnvelope = await prisma.envelope.findMany();
  res.send(allEnvelope);
});

// ADD Envelope
envelopeRoute.post("/", async (req, res, next) => {
  const { title, budget } = req.body;
  const addenvelope = await prisma.envelope.create({
    data: {
      title,
      budget,
    },
  });
  res.json(addenvelope);
});
// GET Single Envelope
envelopeRoute.get("/:id", async (req, res, next) => {
  const dataId = req.params;
  // console.log(dataId);
  const oneEnvelope = await prisma.envelope.findUnique({
    where: {
      id: Number(dataId.id),
    },
  });
  res.send(oneEnvelope);
});
// Update Envelope
envelopeRoute.put("/:id", async (req, res, next) => {
  const dataId = req.params;
  const { title, budget } = req.body;
  // console.log(dataId);
  const updateEnvelope = await prisma.envelope.update({
    where: {
      id: Number(dataId.id),
    },
    data: {
      title,
      budget,
    },
  });
  res.send(updateEnvelope);
});
// Delete Envelope by Id
envelopeRoute.delete("/:id", async (req, res, next) => {
  const dataId = req.params;
  const envelopeCheck = await prisma.envelope.findUnique({
    where: {
      id: Number(dataId.id),
    },
  });
  if (!envelopeCheck) {
    return res.status(404).send({
      message: `Envelope Not Found Brooh!! 🚫`,
    });
  }
  const deleteEnvelope = await prisma.envelope.delete({
    where: {
      id: Number(dataId.id),
    },
  });
  res.send(`Deleted! 🔥`);
});

// Transfer Envelope
envelopeRoute.post("/:fromId/:toId", async (req, res, next) => {
  try {
    const { fromId, toId } = req.params;
    const { budget } = req.body;
    // console.log(fromId + toId);
    // console.log(budget);
    const origin = await prisma.envelope.findUnique({
      where: {
        id: Number(fromId),
      },
    });
    const dest = await prisma.envelope.findUnique({
      where: {
        id: Number(toId),
      },
    });
    // console.log(origin.budget);
    // console.log(dest.budget);
    if (!fromId || !toId) {
      return res.status(404).send({ message: `Envelope Not Found!` });
    }
    if (origin.budget < dest.budget) {
      return res
        .status(400)
        .send({ message: `Amount of transfer exceed  envelope budget fund` });
    }
    const newOrigin = origin.budget - budget;
    const newDest =  dest.budget + budget;

    // origin.budget -= budget;
    // dest.budget += budget;

    const updateOrigin =  await prisma.envelope.update({
        where: {
            id: Number(fromId)
        },
        data: {
            budget: newOrigin
        }
    })
    const updateDest =  await prisma.envelope.update({
        where: {
            id: Number(toId)
        },
        data: {
            budget: newDest
        }
    })

    // console.log('destination ' + newOrigin);
    // console.log('destination ' + newDest);
    return res.sendStatus(201).send(newOrigin);
  } catch (err) {
      res.sendStatus(500).send(err)
  }
});

module.exports = envelopeRoute;
