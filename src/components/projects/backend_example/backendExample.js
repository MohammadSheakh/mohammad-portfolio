import { StatusCodes } from "http-status-codes";
import { getDataFromFormOfRequest } from "../../../../helpers/getDataFromFormAR7";
import { simplySaveFileToFolder } from "../../../../helpers/simplySaveToFolder.helper";

export const testController = async (req, res) => {
  try {
    const myData = await getDataFromFormOfRequest(req);
    const exampleFile = myData.files["members[0][memberImage]"][0];

    await simplySaveFileToFolder(exampleFile, "./public/test");

    res.status(StatusCodes.OK).json({
      message: "Test Given Successfully",
      success: true,
      data: {},
    });
  } catch (error) {
    console.error("Error in testController:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};
