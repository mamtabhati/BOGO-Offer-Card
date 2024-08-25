let lastSelectedOffer = null;

function selectOffer(price, offerId) {
    document.getElementById("totalPrice").textContent = price.toFixed(2);

    const sizeColorSelection = document.getElementById("size-color-selection");
    const selectedOfferElement = document.getElementById(offerId);

    if (!selectedOfferElement) {
        console.error(`Element with ID '${offerId}' not found.`);
        return;
    }

    // Check if the clicked offer is the same as the last selected
    if (lastSelectedOffer === offerId) {
        // If the same offer is clicked again, hide the size/color section
        sizeColorSelection.style.display = "none";
        lastSelectedOffer = null; // Reset the last selected offer
    } else {
        // Move size and color section below the selected offer
        selectedOfferElement.after(sizeColorSelection);
        sizeColorSelection.style.display = "flex"; // Show the size/color section
        lastSelectedOffer = offerId; // Update last selected offer
    }
}
