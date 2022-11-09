const consolesModel = require("../models/consolesModel");
const findAllConsoles = async (req, res) => {
    try {
        const allConsoles = await consolesModel.find();
        res.status(200).json(allConsoles);

    }  catch (error) {
        console.log(erros);
        res.status(500).json({message: error.message})

    }
}

const findConsoleById = async (req, res) =>{
    try {
        const findConsole = await consolesModel.FindById(req.params.id);
        res.status(200).json(findConsole);

    }catch (error) {
        console.error(error);
        res.status(500).json({message: error.message})
    }
}

const addNewConsole = async (req, res) => {
    try {
        const {name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        } = req.body;
        const newConsole = new consolesModel({
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        });
        const savedConsole = await newConsole.save();
        res.status(200).json({message: "New console successfully added", savedConsole
    });
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);

}
};
const updateConsole = async (req, res) => {
    try {
        const {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        } = req.body;
        const updateConsole = await consolesModel.FindByIdAndUpdate(req.params.id, {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        });
        res.status(200).json ({message: "Conbsoçe successfully update", updateConsole
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });

    }
};

const deleteConsole = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteConsole = await consolesModel.FindByIdAndaDelete(id);
        const message = `Console with name ${deleteConsole.name} was successfully deleted`;
        res.status(200).json({message});
    } catch (error) {
        consdole.log(error);
        res.status(500).json({message: error.message});
        
    }
};
module.exports = {
    findAllConsoles,
    findConsoleById,
    addNewConsole,
    updateConsole,
    deleteConsole,

}

