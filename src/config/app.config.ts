interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin', 'Employee', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View employee information',
    'Check vacation status',
    'View payroll information',
  ],
  ownerAbilities: ['Manage user', 'Manage company', 'Manage employee', 'Manage payroll'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7aa92e3e-f669-4c21-bc18-5deef2bebdef',
};
