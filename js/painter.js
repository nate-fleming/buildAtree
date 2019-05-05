let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    addTape: function (e) {
        console.log(`put tape around the ${e}`)
    },
    addTool: function (e) {
        this.tools.push(e)
        console.log(painter.tools)
    }
  }

painter.addTape('windows')

painter.addTool('hammer')


  














//   Add an action that the painter can perform.
//   Have her take that action by execucting the method you created.
//   BONUS: Add a method that allows us to add new tools for the painter.