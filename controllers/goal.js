const Goal = require('../model/goalModel')

// Get goals
// /api/goals
const getGoals = async (req, res )=> {
const goals = await Goal.find()

res.send(goals)
}

// Get goals
// /api/goals
const setGoal = async (req, res )=> {
    if  (!req.body.text) {
        res.send('add goal')
    }

const goals = await Goal.create({
    text: req.body.text
})

res.send(goals)
}

// Get goals
// /api/goals/:id
const updateGoal = async (req, res )=> {
const goal = await Goal.findById(req.params.id)

if (!goal) {
    res.send('goal not found')
  }
  
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
}

// Get goals
// /api/goals/:id
const deleteGoal = async (req, res )=> {
const goal = await Goal.findById(req.params.id)

if (!goal) {
    res.send('goal not found')
  }

  await goal.remove()

res.send('goal deleted')
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
  }