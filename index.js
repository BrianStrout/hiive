import { callObserverFade, callObserverPlayer } from "./src/modules/ioLonely";
let popup = document.getElementById("verification");
window.onload = () => {
  callObserverFade();
  callObserverPlayer();
  console.log("should be obs");
};

// let pw = document.getElementById("password");
// pw.addEventListener("input", (e) => {
//   console.log("changing", e.target.value);
//   // popup.close();
//   if (e.target.value === "sounds good") {
//     popup.close();
//   }
// });

// let aa = document.getElementById("artMenu");
// let am = document.getElementById("artistAreaModal");
// aa.addEventListener("click", (e) => {
//   console.log("changing");
//   console.log(am);
//   // popup.close();
//   am.show;
// });

// less lonely
// document.getElementById("enter").addEventListener("click", () => {
//   if (pw.value === "a") {
//     popup.close();
//   }
// });
document.addEventListener("click", (e) => {
  console.log(e.target);
  // popup.close("a");
  if (e.target.classList.contains("btn-primary")) {
    e.preventDefault();
    const formSelector = document.getElementById("myForm");

    // let formData = {
    //   tes: "test",
    //   service_id: "service_9moydam",
    //   template_id: "template_fejt36a",
    //   form: document.getElementById("myForm"),
    //   user_id: "sMWYJVw_Of2YBvfKm",
    //   template_params: {
    //     "sender-name": "James",
    //     "sender-email": "test@fake.com",
    //   },
    // };

    // let b = {
    //   bname: formSelector.name,
    // };
    // let bbname = formSelector.name.value;

    console.log("submitting");
    // console.log(b);

    const serviceID = "service_9moydam";
    const templateID = "template_u3la1xn";
    // const tt = formData.tes;
    const params = {
      fromName: document.getElementById("fromName").value,
      fromEmail: document.getElementById("fromEmail").value,
      date: document.getElementById("date").value,
    };

    console.log(params);

    console.log("^^^ params");

    emailjs.send(serviceID, templateID, params).then((response) => {
      console.log(params);

      alert("All set, thanks!");
    });
    return;
  }
});
