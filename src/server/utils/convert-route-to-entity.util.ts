const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  'hr-managers': 'hr_manager',
  payrolls: 'payroll',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
