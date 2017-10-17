module.exports = requiredAmount => (req, res, next) => {
  if (req.user.credits < requiredAmount) {
    return res.status(403).send({ error: 'Not enough credits!' })
  }

  next()
}
