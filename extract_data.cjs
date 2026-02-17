
const fs = require('fs');
const pdf = require('pdf-parse');
const XLSX = require('xlsx');

async function readPDF() {
    const dataBuffer = fs.readFileSync('/Users/yeshwanth/Downloads/Slot 3 - 9.pdf');
    const data = await pdf(dataBuffer);
    console.log("=== PDF CONTENT START ===");
    console.log(data.text);
    console.log("=== PDF CONTENT END ===");
}

async function readExcel() {
    const workbook = XLSX.readFile('/Users/yeshwanth/Downloads/data.xlsx');
    const sheetName = workbook.SheetNames[0];
    const csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
    console.log("=== EXCEL CONTENT START ===");
    console.log(csv);
    console.log("=== EXCEL CONTENT END ===");
}

(async () => {
    try {
        await readPDF();
        await readExcel();
    } catch (e) {
        console.error(e);
    }
})();
