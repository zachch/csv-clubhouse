# CSV export for Clubhouse.io Reports
A Chrome extension to export data via a CSV file from a Clubhouse.io reports page

## How it works
The extension crawls through the Reports page in your Clubhouse.io dashboard
and extracts the needed data from the Reports table that is generated after
selecting dates for the Clubhouse.io report.

It relies on a certain HTML structure and CSS class names, so the extension
being able to crawl the page is contingent on Clubhouse.io not making breaking
changes to the reports page. This is the only way to extract the 'Completed at'
time; the current version of the Clubhouse.io api doesn't return the
'Completed At' information for each story.

## Data
The data exported for each story includes:
1. ID
2. Project
3. Owners
4. Type
5. Points
6. Name
7. Labels
8. Epic
9. Created At
10. Completed At
11. Lead Time in Days (How long it took to get from Created At to Completed At)

## Usage
1. Install the extension
2. Go to your Clubhouse.io reports page
2. Click the extension icon (on the right of the address bar)
4. A CSV file will be downloaded automatically
