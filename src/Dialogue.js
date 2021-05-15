import React from "react";
import Swal from "sweetalert2";
export default function Dialogue() {
  (async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Add Comment",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
    });
  })();
}
