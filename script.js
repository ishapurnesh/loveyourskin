document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");

    if (quizForm) {
        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const skinType = document.querySelector('input[name="skin-type"]:checked').value;
            let result = "";

            if (skinType === "oily") {
                result = "Your skin type is Oily. Consider using lightweight, non-comedogenic products.";
            } else if (skinType === "dry") {
                result = "Your skin type is Dry. Opt for hydrating and nourishing products.";
            } else if (skinType === "combination") {
                result = "Your skin type is Combination. Balance hydration with oil control.";
            } else {
                result = "Your skin type is Normal. Use gentle, well-balanced skincare.";
            }

            alert(result);
            window.location.href = "products.html";
        });
    }
});
