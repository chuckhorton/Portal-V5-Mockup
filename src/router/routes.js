const routes = [
  {
    path: '/',
    meta: { title: 'Open Center' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/OpenDashPage.vue') }],
  },
  {
    path: '/merchant',
    meta: { title: 'Merchant Center' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MerchantDashPage.vue') },
    ],
  },
  {
    path: '/open-apps',
    meta: { title: 'Open Apps' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/OpenAppsPage.vue') }],
  },
  {
    path: '/merchant-apps',
    meta: { title: 'Merchant Apps' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MerchantAppsPage.vue') },
    ],
  },
  {
    path: '/merchant-apps',
    meta: { title: 'Applications' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MerchantAppsPage.vue') },
    ],
  },
  {
    path: '/rates',
    meta: { title: 'Rate Sheet' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RateSheetPage.vue') },
    ],
  },
  {
    path: '/enroll',
    meta: { title: 'Enroll in Merchant' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EnrollMerchantPage.vue') },
    ],
  },
  {
    path: '/statements',
    meta: { title: 'Statements' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StatementsPage.vue') },
    ],
  },
  {
    path: '/users',
    meta: { title: 'Manage Users' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/UsersPage.vue') }],
  },
  {
    path: '/companies',
    meta: { title: 'Manage Companies' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CompaniesPage.vue') },
    ],
  },
  {
    path: '/lender',
    meta: { title: 'Lender Comparision' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LenderPage.vue') }],
  },
  {
    path: '/estimator',
    meta: { title: 'Payment Estimator' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EstimatorPage.vue') },
    ],
  },
  {
    path: '/marketing',
    meta: { title: 'Marketing Kit' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MarketingPage.vue') },
    ],
  },
  {
    path: '/charts',
    meta: { title: 'Loan Performance' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ChartsPage.vue') }],
  },
  {
    path: '/help',
    meta: { title: 'Support' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HelpPage.vue') }],
  },
  {
    path: '/contact',
    meta: { title: 'Contact Us' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }],
  },
  {
    path: '/profile',
    meta: { title: 'Profile' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ProfilePage.vue') }],
  },
  {
    path: '/password',
    meta: { title: 'Update Password' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PasswordPage.vue') }],
  },
  {
    path: '/payments',
    meta: { title: 'Payment Settings' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PaymentsPage.vue') }],
  },
  {
    path: '/payments-update',
    meta: { title: 'Update Payment Settings' },
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PaymentsUpdatePage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
