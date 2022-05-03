const createVcPayload = require('./createVcPayload')

const typeTemplateMap = {
  dateOfBirth: vcTemplates.createDoBCredentialPayload,
  relationshipStatus: vcTemplates.createRelationshipStatusCredentialPayload,
  dependants: vcTemplates.createDependantsCredentialPayload,
  employmentStatus: vcTemplates.createEmploymentStatusCredentialPayload,
  highestEducationAttained: vcTemplates.createHighestEducationAttainedCredentialPayload,
  kycStatus: vcTemplates.createKYCStatusCredentialPayload,
  hasKYC: vcTemplates.createHasKYCCredentialPayload,
  citizenship: vcTemplates.createCitizenshipCredentialPayload,
  age: vcTemplates.createAgeCredentialPayload,
  avgMonthlyIncome: vcTemplates.createAvgMonthlyIncomeCredentialPayload,
  avgMonthlyRest: vcTemplates.createAvgMonthlyRestCredentialPayload,
  savingPercent: vcTemplates.createSavingPercentCredentialPayload,
}

module.exports = {
  typeTemplateMap,
  createVcPayload
}

