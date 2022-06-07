import mosuhaSensor from "../models/sensorData.js";

export const getData = async (req, res) => {
    const id = req.query.id;
    try {
        const data = await mosuhaSensor.findAll({
            limit: 1, 
            order: [["id", "DESC"]]
        })
        res.json(data);
    } catch (error) {
        console.log(error);
    }
};