import formidable from "formidable";

export const getDataFromFormOfRequest = (req) => {
  return new Promise((resolve, reject) => {
    try {
      const form = formidable({
        allowEmptyFiles: true,
        minFileSize: 0,
      });

      form.parse(req, (err, fields, files) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        resolve({ fields, files });
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
