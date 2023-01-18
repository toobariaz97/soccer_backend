const { apiError, apiSuccessWithData } = require("../helper/apiHelpers");
const Teams = require("../model/Teams");

exports.getTeams = async (req, res) => {
    try {

        let query = [

            {
                $match: {
                    _id: req.params.id
                }
            },
            {
                $lookoup: {
                    from: "players",
                    localField: "_id",
                    foreignField: "teamId",
                    as: "playersOfTeam"
                }
            }
        ];

        let getTeam = await Teams.aggregate(query);
        return res.status(500).json(apiSuccessWithData("Teams", getTeam));

    } catch (error) {
        console.log(error);
        return res.status(500).json(apiError("Internal server error"));
    }
};