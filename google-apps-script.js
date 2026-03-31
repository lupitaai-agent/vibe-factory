function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data from request
    const email = e.parameter.email || '';
    const name = e.parameter.name || '';
    const useCase = e.parameter.useCase || '';
    const company = e.parameter.company || '';
    const timestamp = new Date();
    
    // Validate email
    if (!email || !email.includes('@')) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Invalid email'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add row to sheet
    sheet.appendRow([email, name, useCase, company, timestamp]);
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Thank you! You have been added to the waitlist.'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
