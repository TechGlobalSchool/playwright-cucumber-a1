const { Then } = require("@cucumber/cucumber");
const TGTablesPage = require("../pages/TGTablesPage");
const { expect } = require("@playwright/test");

const tgTablesPage = new TGTablesPage();

Then(/^user should see the table headings$/, async function (dataTable) {
  /**
   * dataTable.rawTable.flat() returns single-dimensional array of all the cells in the data table coming from your cucumber step
   *
   * ["Rank", "Company", "Employees", "Country"]
   */

  const headings = dataTable.rawTable.flat();
  const $tableHeading = await page
    .locator(tgTablesPage.locators.staticTableHeadings)
    .all();

  // headings.forEach(async(heading, index) => {
  //   await expect($tableHeading.nth(index)).toHaveText(heading)
  // })

  for (const [index, value] of headings.entries()) {
    await expect($tableHeading[index]).toHaveText(value);
  }

  // console.log([...headings.entries()])
});

Then(/^user should see the table data$/, async function (dataTable) {
  const data = dataTable.rawTable.flat();
  const $pageData = await page.locator(
    tgTablesPage.locators.staticTableFirstRow
  );

  await expect($pageData).toHaveText(data);
});

Then(
  /^user should see the table data with the following order$/,
  async function (dataTable) {
    /**
     * dataTable.rawTable returns the entire data table as a two-dimensional array (array of arrays).
     *
     * [
     * ['1',	'iPhone',	'1000',	'1000']
     * ['3',	'Airpods', '100', '300']
     * ['2',	'iPad',	'500', '1000']
     * ]
     */
    const expectedRows = dataTable.rawTable;
    const pageRows = await page.locator(tgTablesPage.locators.sortableTablerows).all()

    for(const [index, row] of pageRows.entries()) {
      await expect(row.locator('td')).toHaveText(expectedRows[index])
    }


    for(const row of expectedRows) {
      console.log(row)

      for(const cell of row) {
        console.log(cell)
      }
    }
  }
);


Then(/^user should fill the form as key-value pairs$/, async function (dataTable) {
	
/**
 * dataTable.rowsHash() transfers the data table into a simple JavaScript object
 * where each row's first cell is used as a key and the second cell as its value.
 * 
 * {
 *  "First Name": "TechGlobal",
 *  "Last Name": "School",
 *  "From": "U.S.",
 *  "Live": "Chicago"
 * }
 */
  const keyValue = dataTable.rowsHash()


  console.log(JSON.stringify(keyValue, null, 2))
});

Then(/^user should handle input form with objects$/, async function (dataTable) {
  /**
   * dataTable.hashes() converts your table into an array of objects, where each object represents a single row.
   * The first row of the table is used as the header (keys for the objects), and rows below header become objects
   * where each column's data is matched to a header key.
   *
   * [
   *  { label: 'First Name', input: 'TechGlobal', error: 'false characters' },
   *  { label: 'Last Name', input: 'School', error: 'wrong lastname ' },
   *  { label: 'From', input: 'U.S.', error: 'Short Characters' },
   *  { label: 'Live', input: 'Chicago', error: 'Wrong Address' }
   * ]
   */
  const inputs = dataTable.hashes()

  console.log(JSON.stringify(inputs, null, 2))

  inputs.forEach((input) => {
    console.log(input.label)
    console.log(input.input)
    console.log(input.error)
  })
})

