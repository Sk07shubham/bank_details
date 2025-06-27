const { jsPDF } = window.jspdf;

document.getElementById("bankForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const logo = new Image();
  logo.src = "/ucobanklogo.png";

  logo.onload = () => {
    const doc = new jsPDF();

    // Add logo
    doc.addImage(logo, 'PNG', 80, 10, 50, 20); // x, y, width, height

    // Title
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("Customer Account Information", 60, 40);

    // CSP Section
    doc.setFontSize(12);
    doc.setFont(undefined, "bold");
    doc.text("Date:", 15, 50);
    doc.setFont(undefined, "normal");
    doc.text(document.getElementById("date").value, 40, 50);

    doc.setFont(undefined, "bold");
    doc.text("CSP Address:", 15, 58);
    doc.setFont(undefined, "normal");
    doc.text(document.getElementById("cspAddress").value, 50, 58);

    doc.setFont(undefined, "bold");
    doc.text("CSP Name:", 15, 68);
    doc.setFont(undefined, "normal");
    doc.text(document.getElementById("cspName").value, 50, 68);

    doc.setFont(undefined, "bold");
    doc.text("Mobile No:", 15, 76);
    doc.setFont(undefined, "normal");
    doc.text(document.getElementById("cspMobile").value, 50, 76);

    // Account Details Section
    let y = 90;
    const details = [
      ["1", "Account Number", document.getElementById("accountNumber").value],
      ["2", "Account Holder Name", document.getElementById("accountHolder").value],
      ["3", "Account Type", document.getElementById("accountType").value],
      ["4", "IFS CODE", document.getElementById("ifsc").value],
      ["5", "Branch Name", document.getElementById("branch").value],
      ["6", "Customer ID", document.getElementById("customerId").value],
      ["7", "Address", document.getElementById("address").value],
      ["8", "Mobile No", document.getElementById("mobile").value],
    ];

    details.forEach(([no, label, value]) => {
      doc.setFont(undefined, "bold");
      doc.text(`${no}. ${label}:`, 15, y);
      doc.setFont(undefined, "normal");
      doc.text(value, 70, y);
      y += 12; // spacing
    });

    // Signature and Note
    doc.setFont(undefined, "bold");
    doc.text("Signature", 150, y + 10);

    const infoLine = "To know your account balance give a missed call 092-131-25125";
    doc.setFont(undefined, "normal");
    doc.text(infoLine, 15, y + 25);

    // Save PDF
    doc.save("uco-account-info.pdf");
  };
});
