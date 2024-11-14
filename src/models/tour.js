const tourModel = {
    //LEER
    async getAllToursModel() {
        try {
            const peticion = await fetch("http://localhost:4000/tours")
            const tours = await peticion.json()
            return tours
        } catch (error) {
            console.log(error)
        }
    },
    
    //CLASE 9(?)
    
    //CREAR (un nuevo tour)
    async createTourModel(newTour){
        //conexion con la bdd
        const url = "http://localhost:4000/tours"
        //enviar datos a la bdd
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newTour),
            headers:{"Content-Tupe":"application/json"}
        })
        //obtener respuesta de la bdd
        const data = await peticion.json()
        //enviar respuesta al controlador; 
        return data
    },
    
    async updateTourModel(tourid, updatedTour) {
        
        //conexion con la bdd
        const url = `http://localhost:4000/tours/${tourid}`

        //enviar datos a la bdd
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updatedTour),
            headers:{"Content-Tupe":"application/json"}
        })

        //obtener respuesta de la bdd
        const data = await peticion.json()

        //enviar respuesta al controlador; 
        return data
    },
    async deleteTourModel(tourid) {
        const url = `http://localhost:4000/tours/${tourid}`
        
        const peticion = await fetch(url,{
            method:"DELETE",
            headers:{"Content-Tupe":"application/json"}
        })

        //obtener respuesta de la bdd
        const data = await peticion.json()

        //enviar respuesta al controlador; 
        return data
    },
    async getTourModel(tourid) {
        try {
            const peticion = await fetch(`http://localhost:4000/tours/${tourid}`)
            const tour = await peticion.json()
            return tour
        } catch (error) {
            console.log(error)
        }
    }
}
export default tourModel