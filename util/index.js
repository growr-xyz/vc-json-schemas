const createVcPayload = require('./createVcPayload')

const getTemplate = (type) => {
  return typeTemplateMap[type]
}

const typeTemplateMap = {
  dateOfBirth: createVcPayload.createDoBCredentialPayload,
  relationshipStatus: createVcPayload.createRelationshipStatusCredentialPayload,
  dependants: createVcPayload.createDependantsCredentialPayload,
  employmentStatus: createVcPayload.createEmploymentStatusCredentialPayload,
  highestEducationAttained: createVcPayload.createHighestEducationAttainedCredentialPayload,
  kycStatus: createVcPayload.createKYCStatusCredentialPayload,
  hasKYC: createVcPayload.createHasKYCCredentialPayload,
  citizenship: createVcPayload.createCitizenshipCredentialPayload,
  age: createVcPayload.createAgeCredentialPayload,
  avgMonthlyIncome: createVcPayload.createAvgMonthlyIncomeCredentialPayload,
  avgMonthlyRest: createVcPayload.createAvgMonthlyRestCredentialPayload,
  savingPercent: createVcPayload.createSavingPercentCredentialPayload,
  agriFinCoop: createVcPayload.createAgriFinCoopCredentialPayload,
  landSize: createVcPayload.createLandSizeCredentialPayload,
  maritalStatus: createVcPayload.createMaritalStatusCredentialPayload,
  savingsAndCreditCoops: createVcPayload.createSavingsAndCreditCoopCredentialPayload,
}

module.exports = {
  getTemplate,
}
