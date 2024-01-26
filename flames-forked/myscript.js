function flames() {
  // 1. Get the input names
  const yourName = $(".YourName").val();
  const gfName = $(".YourGfName").val();

  // 2. Process the FLAMES logic
  let flamesCount = 0;
  let combinedName = yourName + gfName;
  for (let i = 0; i < combinedName.length; i++) {
    for (let j = i + 1; j < combinedName.length; j++) {
      if (combinedName[i] === combinedName[j]) {
        combinedName = combinedName.slice(0, j) + combinedName.slice(j + 1);
        flamesCount++;
        j--; // Adjust for removed character
      }
    }
  }

  // 3. Map FLAMES letters to results and colors
  const results = [
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
    "Siblings",
  ];
  const colors = [
    "#007bff",
    "#dc3545",
    "#ffc107",
    "#28a745",
    "#dc3545",
    "#6c757d",
  ]; // Blue, Red, Yellow, Green, Red, Gray

  // 4. Update the h1 tag with result and color
  const resultIndex = flamesCount % results.length;
  const result = results[resultIndex];
  const color = colors[resultIndex];
  $(".h1").text(result).css("color", color);
}
