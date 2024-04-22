let zuriProfile = {

    firstName: "Sihence",
    Stack: "frontend",
    age: 20,
    }
    
    const  updateZuriProfile = (zuriProfile) => {
      const update = {...zuriProfile}
      update.age = 25
      return update
      }
    
    console.log(updateZuriProfile())