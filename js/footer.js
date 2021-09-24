// functions.js

/**
 *
 * @arg {object} object
 */

/**@function setupFooter(object) {
 * target: string,
 * company: string,
 * copyrightNote: string,
 * copyrightStatus: boolean (default: false),
 * yearStarted: number,
 * yearEnded: number,
 * yearPosition: string ["start"|"end"] (defaul: "end")
 * }
 */

/**
 *
 * @function setupFooter
 * @param {Object} object
 * @param {string} object.target
 * @param {string} object.company
 * @param {string} object.copyrightNote
 * @param {boolean} object.copyrightStatus
 * @param {number} object.yearStarted
 * @param {number} object.yearEnded
 * @param {("start"|"end")} object.yearPosition
 *
 * @param object An object that has footer properties.
 * @param object.target It consists of a string, which acts as a query selector.
 * @param object.company It consists of a string, which represents the name of a company.
 * @param object.copyrightNote It contains a string, that represents your reserved copyrights.
 * @param object.copyrightStatus It contains a boolean, It works like a flag which enable/disable the the word 'Copyright &copy;' in the footer text.
 * @param object.yearStarted It consists of a number that defines the year in which the company started.
 * @param object.yearEnded It consists of a number, which defines the year in which the company was dissolved/discontinued.
 * @param object.yearPosition It contains a string, which can be "start"/"end".
 *
 *
 */
function setupFooter(object) {
  let footerText = "";

  const d = new Date();
  const myFooter = {
    target: object.target || "",
    company: object.company || "[company]",
    copyrightNote: object.copyrightNote || "[copyright_note]",
    copyrightStatus: object.copyrightStatus || false,
    yearEnded: object.yearEnded || d.getFullYear(),
    yearPosition: object.yearPosition || "end",
    yearStarted: object.yearStarted || d.getFullYear(),
  };

  const error_status = validateFooterObject(myFooter);

  function validateFooterObject(object) {
    try {
      const d = new Date();

      const err_message = {
        containsString: "Always contains a string value.",
        containsNumber: "Always contains a number value.",
        containsBoolean: "Always contains a boolean value.",
      };

      // CHecking for target property
      if (object.target && typeof object.target != "string")
        errMessage("target", err_message.containsString);

      // CHecking for target element
      const el = document.querySelector(object.target);
      el.innerHTML = "[copyright_text] [company] [year]. [copyright_note]";
      if (!el) errMessage("target", "Enter the valid target.");

      // CHecking for company property
      if (object.company && typeof object.company != "string")
        errMessage("company", err_message.containsString);

      // CHecking for copyrightNote property
      if (object.copyrightNote && typeof object.copyrightNote != "string")
        errMessage("copyrightNote", err_message.containsString);

      // CHecking for copyrightStatus property
      if (object.copyrightStatus && typeof object.copyrightStatus != "boolean")
        errMessage("copyrightStatus", err_message.containsBoolean);

      // CHecking for yearEnded property
      if (object.yearEnded && typeof object.yearEnded != "number")
        errMessage("yearEnded", err_message.containsNumber);
      if (object.yearEnded && object.yearEnded > d.getFullYear())
        errMessage("yearEnded", "Can't be greater than current year.");

      // CHecking for yearStarted property
      if (object.yearStarted && typeof object.yearStarted != "number")
        errMessage("yearStarted", err_message.containsNumber);
      if (object.yearStarted && object.yearStarted > d.getFullYear())
        errMessage("yearStarted", "Can't be greater than current year.");
      if (object.yearStarted && object.yearStarted > object.yearEnded)
        errMessage("yearStarted", "Can't be greater than yearEnded year.");

      // CHecking for yearPosition property
      if (object.yearPosition && typeof object.yearPosition != "string")
        errMessage("yearPosition", err_message.containsString);

      //
    } catch (err) {
      console.log(err);
      return true;
    }

    return false;

    function errMessage(propertyName, errorMessage) {
      const message = `${propertyName}: ${errorMessage}`;

      throw message;
    }
  }

  if (!error_status) {
    console.log("No errors is setup Footer!");

    const el = document.querySelector(myFooter.target);
    const d = new Date();

    const footerTxetStructures = [
      "[copyright_text] [year] [company]. [copyright_note]",
      "[copyright_text] [company] [year]. [copyright_note]",
      "[year] [company]. [copyright_note]",
      "[company] [year]. [copyright_note]",
    ];

    //
    // Setup footer structure

    if (myFooter.copyrightStatus === true) {
      if (myFooter.yearPosition === "start") {
        footerText = footerTxetStructures[0];
      } else {
        footerText = footerTxetStructures[1];
      }
    } else {
      if (myFooter.yearPosition === "start") {
        footerText = footerTxetStructures[2];
      } else {
        footerText = footerTxetStructures[3];
      }
    }

    //
    // Setup footer Values

    // Setup footer copyright text
    myFooter.copyrightStatus === true
      ? (footerText = footerText.replace(
          "[copyright_text]",
          "Copyright &copy; "
        ))
      : footerText;

    // Setup footer copyright note
    myFooter.copyrightNote
      ? (footerText = footerText.replace(
          "[copyright_note]",
          myFooter.copyrightNote
        ))
      : footerText;

    // Setup footer company
    myFooter.company
      ? (footerText = footerText.replace("[company]", myFooter.company))
      : footerText;

    // Setup footer year
    if (myFooter.yearEnded) {
      if (myFooter.yearStarted === myFooter.yearEnded) {
        footerText = footerText.replace("[year]", `${myFooter.yearEnded}`);
      } else {
        footerText = footerText.replace(
          "[year]",
          `${myFooter.yearStarted}-${getHalfYear(myFooter.yearEnded)}`
        );
      }
    } else {
      if (myFooter.yearStarted === myFooter.yearEnded) {
        footerText = footerText.replace("[year]", `${d.getFullYear()}`);
      } else {
        footerText = footerText.replace(
          "[year]",
          `${myFooter.yearStarted}-${getHalfYear(d.getFullYear())}`
        );
      }
    }

    el.innerHTML = footerText;

    // Functions
    function getHalfYear(param1) {
      if (typeof param1 === "number") {
        const str = param1.toString();
        const arr = [];

        let str2 = "";

        for (let i = 0; i < str.length; i++) {
          if (i === 2) break;
          else arr[i] = str[str.length - 2 + i].toString();
        }

        for (let i = 0; i < arr.length; i++) {
          str2 += arr[i];
        }

        return parseInt(str2);
      }
    }
  }

  // console.log({ ...myFooter, footerText: footerText });

  return { ...myFooter, footerText: footerText };
}
