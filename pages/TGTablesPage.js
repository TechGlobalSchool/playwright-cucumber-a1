const locators = Object.freeze({
  staticTableHeadings: '#static_table .header',
  staticTableFirstRow: '#static_table tbody tr:first-child > td',
  sortableTablerows: '#sortable_table tbody > tr'
})

class TGTablesPage {
  locators = locators
}

module.exports = TGTablesPage