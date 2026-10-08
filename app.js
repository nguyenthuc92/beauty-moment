const $ = (id) => document.getElementById(id);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const loginMenuBtn = $('loginMenuBtn');
const loginMenu = $('loginMenu');
const profileMenu = $('profileMenu');
const guestButtonContent = $('guestButtonContent');
const profileButtonContent = $('profileButtonContent');
const profileName = $('profileName');
const profilePhone = $('profilePhone');
const profileMenuName = $('profileMenuName');
const profileMenuRole = $('profileMenuRole');
const profileMenuPhone = $('profileMenuPhone');
const logoutBtn = $('logoutBtn');
const profileInfoBtn = $('profileInfoBtn');
const backdrop = $('authBackdrop');
const closeAuth = $('closeAuth');
const roleLabel = $('roleLabel');
const authTitle = $('authTitle');
const authSubtitle = $('authSubtitle');
const tabRegister = $('tabRegister');
const tabLogin = $('tabLogin');
const toast = $('toast');
const notificationWrap = $('notificationWrap');
const notificationBtn = $('notificationBtn');
const notificationBadge = $('notificationBadge');
const notificationPanel = $('notificationPanel');
const notificationSummary = $('notificationSummary');
const notificationList = $('notificationList');
const markAllReadBtn = $('markAllReadBtn');
const notificationUnreadTab = $('notificationUnreadTab');
const notificationReadTab = $('notificationReadTab');
const notificationUnreadCount = $('notificationUnreadCount');
const notificationReadCount = $('notificationReadCount');
const notificationDetailBackdrop = $('notificationDetailBackdrop');
const closeNotificationDetail = $('closeNotificationDetail');
const closeNotificationDetailBottom = $('closeNotificationDetailBottom');
const contactBackdrop = $('contactBackdrop');
const closeContact = $('closeContact');
const contactReadOnlyView = $('contactReadOnlyView');
const managerSalonForm = $('managerSalonForm');
const managerSalonLogoInput = $('managerSalonLogoInput');
const managerSalonLogoPreview = $('managerSalonLogoPreview');
const managerSalonResetBtn = $('managerSalonResetBtn');
const salonMiniCard = $('salonMiniCard');
const navIntroBtn = $('navIntroBtn');
const navIntroVoiceBtn = $('navIntroVoiceBtn');
const customerIntroBackdrop = $('customerIntroBackdrop');
const closeCustomerIntro = $('closeCustomerIntro');
const customerIntroCloseBottom = $('customerIntroCloseBottom');
const customerIntroListenBtn = $('customerIntroListenBtn');
const customerIntroBookBtn = $('customerIntroBookBtn');
const navServiceBtn = $('navServiceBtn');
const managerConfigWorkspace = $('managerConfigWorkspace');
const managerConfigMenuButtons = Array.from(document.querySelectorAll('[data-manager-config-menu]'));
const managerConfigPanels = Array.from(document.querySelectorAll('[data-manager-config-panel]'));
const managerFinanceMenuButtons = Array.from(document.querySelectorAll('[data-manager-finance-menu]'));
const managerFinanceViews = Array.from(document.querySelectorAll('[data-manager-finance-view]'));
const revenueDailyTitle = $('revenueDailyTitle');
const revenueDailyMeta = $('revenueDailyMeta');
const revenueDailyTableWrap = $('revenueDailyTableWrap');
const revenueMonthlyTitle = $('revenueMonthlyTitle');
const revenueMonthlyTableWrap = $('revenueMonthlyTableWrap');
const revenueYearlyTableWrap = $('revenueYearlyTableWrap');
const revenueArchiveBtn = $('revenueArchiveBtn');
const revenueViewAllBtn = $('revenueViewAllBtn');
const revenueArchiveBackdrop = $('revenueArchiveBackdrop');
const closeRevenueArchive = $('closeRevenueArchive');
const revenueArchiveCloseBottom = $('revenueArchiveCloseBottom');
const revenueArchiveList = $('revenueArchiveList');
const revenueArchiveDetailBackdrop = $('revenueArchiveDetailBackdrop');
const closeRevenueArchiveDetail = $('closeRevenueArchiveDetail');
const revenueArchiveDetailCloseBottom = $('revenueArchiveDetailCloseBottom');
const revenueArchiveDetailLabel = $('revenueArchiveDetailLabel');
const revenueArchiveDetailContent = $('revenueArchiveDetailContent');
const revenueAllBackdrop = $('revenueAllBackdrop');
const closeRevenueAll = $('closeRevenueAll');
const revenueAllCloseBottom = $('revenueAllCloseBottom');
const revenueAllContent = $('revenueAllContent');
const revenuePrintPdfBtn = $('revenuePrintPdfBtn');
const revenueMonthlyArchiveBtn = $('revenueMonthlyArchiveBtn');
const revenueMonthlyViewAllBtn = $('revenueMonthlyViewAllBtn');
const revenueMonthlyArchiveBackdrop = $('revenueMonthlyArchiveBackdrop');
const closeRevenueMonthlyArchive = $('closeRevenueMonthlyArchive');
const revenueMonthlyArchiveCloseBottom = $('revenueMonthlyArchiveCloseBottom');
const revenueMonthlyArchiveList = $('revenueMonthlyArchiveList');
const revenueMonthlyArchiveDetailBackdrop = $('revenueMonthlyArchiveDetailBackdrop');
const closeRevenueMonthlyArchiveDetail = $('closeRevenueMonthlyArchiveDetail');
const revenueMonthlyArchiveDetailCloseBottom = $('revenueMonthlyArchiveDetailCloseBottom');
const revenueMonthlyArchiveDetailLabel = $('revenueMonthlyArchiveDetailLabel');
const revenueMonthlyArchiveDetailContent = $('revenueMonthlyArchiveDetailContent');
const revenueMonthlyAllBackdrop = $('revenueMonthlyAllBackdrop');
const closeRevenueMonthlyAll = $('closeRevenueMonthlyAll');
const revenueMonthlyAllCloseBottom = $('revenueMonthlyAllCloseBottom');
const revenueMonthlyAllContent = $('revenueMonthlyAllContent');
const revenueMonthlyPrintPdfBtn = $('revenueMonthlyPrintPdfBtn');
const serviceUsageTitle = $('serviceUsageTitle');
const serviceUsageMeta = $('serviceUsageMeta');
const serviceUsageTableWrap = $('serviceUsageTableWrap');
const expenseSummary = $('expenseSummary');
const expenseTableBody = $('expenseTableBody');
const expenseFilterCategory = $('expenseFilterCategory');
const expenseFilterReset = $('expenseFilterReset');
const expenseFilterStatus = $('expenseFilterStatus');
const profitMonthlyTitle = $('profitMonthlyTitle');
const profitSummary = $('profitSummary');
const profitMonthlyTableWrap = $('profitMonthlyTableWrap');
const profitChartTitle = $('profitChartTitle');
const profitChartMeta = $('profitChartMeta');
const profitChartWrap = $('profitChartWrap');
const profitArchiveBtn = $('profitArchiveBtn');
const profitViewAllBtn = $('profitViewAllBtn');
const profitArchiveBackdrop = $('profitArchiveBackdrop');
const closeProfitArchive = $('closeProfitArchive');
const profitArchiveCloseBottom = $('profitArchiveCloseBottom');
const profitArchiveList = $('profitArchiveList');
const profitArchivePreview = $('profitArchivePreview');
const profitAllBackdrop = $('profitAllBackdrop');
const closeProfitAll = $('closeProfitAll');
const profitAllCloseBottom = $('profitAllCloseBottom');
const profitAllContent = $('profitAllContent');
const profitPrintBtn = $('profitPrintBtn');
const managerStaffTableBody = $('managerStaffTableBody');
const managerCustomerTableBody = $('managerCustomerTableBody');
const crmCustomerSearch = $('crmCustomerSearch');
const crmBehaviorFilter = $('crmBehaviorFilter');
const crmTierFilter = $('crmTierFilter');
const crmCareFilter = $('crmCareFilter');
const crmSortFilter = $('crmSortFilter');
const crmResetFilters = $('crmResetFilters');
const crmTableStatus = $('crmTableStatus');
const customerTierCriteriaBody = $('customerTierCriteriaBody');
const crmResetTierCriteria = $('crmResetTierCriteria');
const customerProfileBackdrop = $('customerProfileBackdrop');
const closeCustomerProfile = $('closeCustomerProfile');
const customerProfileCloseBottom = $('customerProfileCloseBottom');
const customerProfileTitle = $('customerProfileTitle');
const customerProfileIdentity = $('customerProfileIdentity');
const customerProfileTierLabel = $('customerProfileTierLabel');
const customerProfileStats = $('customerProfileStats');
const customerProfileCare = $('customerProfileCare');
const customerProfileHistory = $('customerProfileHistory');
const customerProfileSendPromo = $('customerProfileSendPromo');
const managerStaffRatingBody = $('managerStaffRatingBody');
const managerRatingSyncStatus = $('managerRatingSyncStatus');
const addStaffRowBtn = $('addStaffRowBtn');
const staffApplicationLibraryBtn = $('staffApplicationLibraryBtn');
const staffApplicationBackdrop = $('staffApplicationBackdrop');
const closeStaffApplicationLibrary = $('closeStaffApplicationLibrary');
const staffApplicationUploadForm = $('staffApplicationUploadForm');
const staffApplicationEmployeeSelect = $('staffApplicationEmployeeSelect');
const staffApplicationFile = $('staffApplicationFile');
const staffApplicationMessage = $('staffApplicationMessage');
const staffApplicationList = $('staffApplicationList');
const staffApplicationPreviewBackdrop = $('staffApplicationPreviewBackdrop');
const closeStaffApplicationPreview = $('closeStaffApplicationPreview');
const staffApplicationPreviewCloseBottom = $('staffApplicationPreviewCloseBottom');
const staffApplicationPreviewPerson = $('staffApplicationPreviewPerson');
const staffApplicationPreviewTitle = $('staffApplicationPreviewTitle');
const staffApplicationPreviewMeta = $('staffApplicationPreviewMeta');
const staffApplicationPreviewViewer = $('staffApplicationPreviewViewer');
const staffApplicationPreviewDownload = $('staffApplicationPreviewDownload');
const staffDeleteBackdrop = $('staffDeleteBackdrop');
const closeStaffDelete = $('closeStaffDelete');
const cancelStaffDelete = $('cancelStaffDelete');
const confirmStaffDelete = $('confirmStaffDelete');
const staffDeleteTitle = $('staffDeleteTitle');
const staffDeleteMessage = $('staffDeleteMessage');
const staffDeleteSummary = $('staffDeleteSummary');
const managerRatingQuarterLabel = $('managerRatingQuarterLabel');
const quarterSummaryYear = $('quarterSummaryYear');
const managerQuarterSummaryBody = $('managerQuarterSummaryBody');
const addRatingCriterionBtn = $('addRatingCriterionBtn');
const managerRatingCriteriaBody = $('managerRatingCriteriaBody');
const navPromoBtn = $('navPromoBtn');
const myScheduleNavBtn = $('myScheduleNavBtn');
const contactNavBtn = $('contactNavBtn');
const staffExtraNavBtn = $('staffExtraNavBtn');
const staffWorkspace = $('staffWorkspace');
const staffWorkspaceTitle = $('staffWorkspaceTitle');
const staffWorkspaceLead = $('staffWorkspaceLead');
const staffIdentityCard = $('staffIdentityCard');
const staffPanels = Array.from(document.querySelectorAll('[data-staff-panel]'));
const staffOverviewMetrics = $('staffOverviewMetrics');
const staffNextAppointment = $('staffNextAppointment');
const staffTodaySchedule = $('staffTodaySchedule');
const staffScheduleSummary = $('staffScheduleSummary');
const staffScheduleList = $('staffScheduleList');
const staffServicesGrid = $('staffServicesGrid');
const staffShiftToday = $('staffShiftToday');
const staffShiftWeek = $('staffShiftWeek');
const staffRatingSummary = $('staffRatingSummary');
const staffRatingDistribution = $('staffRatingDistribution');
const staffFeedbackList = $('staffFeedbackList');
const staffNotificationsSummary = $('staffNotificationsSummary');
const staffNotificationsList = $('staffNotificationsList');
const myScheduleBackdrop = $('myScheduleBackdrop');
const closeMySchedule = $('closeMySchedule');
const myScheduleAccount = $('myScheduleAccount');
const myScheduleList = $('myScheduleList');
const myScheduleModal = $('myScheduleModal');
const myScheduleToolbar = $('myScheduleToolbar');
const managerScheduleBackdrop = $('managerScheduleBackdrop');
const managerScheduleModal = $('managerScheduleModal');
const closeManagerSchedule = $('closeManagerSchedule');
const managerScheduleAccount = $('managerScheduleAccount');
const managerScheduleList = $('managerScheduleList');
let managerScheduleFiltersV57 = { status:'operating', rating:'all', service:'all', source:'all' };
let customerScheduleShowArchivedV61 = false;
const managerCommsBackdrop = $('managerCommsBackdrop');
const closeManagerComms = $('closeManagerComms');
const managerCommsForm = $('managerCommsForm');
const managerCommsSelectedCount = $('managerCommsSelectedCount');
const managerCommsCustomerTotal = $('managerCommsCustomerTotal');
const managerCommsSelectAll = $('managerCommsSelectAll');
const managerCommsSearch = $('managerCommsSearch');
const managerCommsSegmentFilter = $('managerCommsSegmentFilter');
const managerCommsRecipientList = $('managerCommsRecipientList');
const managerCommsSubject = $('managerCommsSubject');
const managerCommsBody = $('managerCommsBody');
const managerCommsAiReady = $('managerCommsAiReady');
const managerCommsAiApprove = $('managerCommsAiApprove');
const managerCommsAiRevise = $('managerCommsAiRevise');
const managerCommsAiStatus = $('managerCommsAiStatus');
const managerCommsPreviewTitle = $('managerCommsPreviewTitle');
const managerCommsPreviewBody = $('managerCommsPreviewBody');
const managerCommsMessage = $('managerCommsMessage');
const managerPromotionHistoryBtn = $('managerPromotionHistoryBtn');
const promotionHistoryBackdrop = $('promotionHistoryBackdrop');
const closePromotionHistory = $('closePromotionHistory');
const promotionHistoryTitle = $('promotionHistoryTitle');
const promotionHistoryEyebrow = $('promotionHistoryEyebrow');
const promotionHistoryRoleLabel = $('promotionHistoryRoleLabel');
const promotionHistorySubtitle = $('promotionHistorySubtitle');
const promotionHistoryCount = $('promotionHistoryCount');
const promotionHistoryList = $('promotionHistoryList');
const serviceDetailBackdrop = $('serviceDetailBackdrop');
const closeServiceDetail = $('closeServiceDetail');
const serviceDetailCloseSecondary = $('serviceDetailCloseSecondary');
const serviceDetailBookBtn = $('serviceDetailBookBtn');
const nailGalleryBackdrop = $('nailGalleryBackdrop');
const closeNailGallery = $('closeNailGallery');
const closeNailGalleryBottom = $('closeNailGalleryBottom');
const heroBookBtn = $('heroBookBtn');
const bookingBackdrop = $('bookingBackdrop');
const bookingModalCloseBtn = $('closeBookingModal');
const bookingCancelBtn = $('bookingCancelBtn');
const bookingSubmitBtn = $('bookingSubmitBtn');
const managerQuickBookingBtn = $('managerQuickBookingBtn');
const managerScheduleBookBtn = $('managerScheduleBookBtn');
const managerBookingCustomerPanel = $('managerBookingCustomerPanel');
const managerBookingRegisteredPane = $('managerBookingRegisteredPane');
const managerBookingGuestPane = $('managerBookingGuestPane');
const managerBookingCustomerSearch = $('managerBookingCustomerSearch');
const managerBookingCustomerSelect = $('managerBookingCustomerSelect');
const managerBookingSelectedCustomer = $('managerBookingSelectedCustomer');
const managerBookingSourceBadge = $('managerBookingSourceBadge');
const managerBookNowBtn = $('managerBookNowBtn');
let bookingServiceCards = Array.from(document.querySelectorAll('[data-booking-service]'));
const serviceCardsGrid = $('serviceCardsGrid');
const bookingServiceCardList = $('bookingServiceCardList');
const managerAddServiceCard = $('managerAddServiceCard');
const managerServiceBackdrop = $('managerServiceBackdrop');
const closeManagerService = $('closeManagerService');
const managerServiceCancel = $('managerServiceCancel');
const managerServiceForm = $('managerServiceForm');
const managerServiceName = $('managerServiceName');
const managerServicePrice = $('managerServicePrice');
const managerServiceDuration = $('managerServiceDuration');
const managerServiceBuffer = $('managerServiceBuffer');
const managerServiceTimingPreview = $('managerServiceTimingPreview');
const managerServiceTables = $('managerServiceTables');
const managerServiceDescription = $('managerServiceDescription');
const managerServiceSummary = $('managerServiceSummary');
const managerServiceImage = $('managerServiceImage');
const managerServiceImagePreview = $('managerServiceImagePreview');
const managerServiceMessage = $('managerServiceMessage');
const managerServiceHeading = $('managerServiceHeading');
const managerServiceModeLabel = $('managerServiceModeLabel');
const managerServiceSubtitle = $('managerServiceSubtitle');
const managerServiceSubmitLabel = $('managerServiceSubmitLabel');
const managerServiceStepsEditor = $('managerServiceStepsEditor');
const managerServiceAddStep = $('managerServiceAddStep');
const bookingNailPickerWrap = $('bookingNailPickerWrap');
const bookingNailPickerBtn = $('bookingNailPickerBtn');
let nailSampleCards = Array.from(document.querySelectorAll('.nail-sample-card[data-nail-code]'));
const nailGalleryGrid = $('nailGalleryGrid');
const managerNailLibraryTools = $('managerNailLibraryTools');
const managerNailLibraryCount = $('managerNailLibraryCount');
const managerNailCode = $('managerNailCode');
const managerNailName = $('managerNailName');
const managerNailDescription = $('managerNailDescription');
const managerNailImage = $('managerNailImage');
const managerNailAddBtn = $('managerNailAddBtn');
const nailGalleryKicker = $('nailGalleryKicker');
const nailGalleryKickerText = $('nailGalleryKickerText');
const nailGallerySubtitle = $('nailGallerySubtitle');
const serviceTableStatusWrap = $('serviceTableStatusWrap');
const serviceTableStatusLabel = $('serviceTableStatusLabel');
const serviceTableStatusRow = $('serviceTableStatusRow');
const serviceTableStatusHint = $('serviceTableStatusHint');
const bookingWaitlistBtn = $('bookingWaitlistBtn');
const bookingWaitlistCount = $('bookingWaitlistCount');
const bookingWaitlistHint = $('bookingWaitlistHint');
const waitlistBackdrop = $('waitlistBackdrop');
const closeWaitlist = $('closeWaitlist');
const closeWaitlistBottom = $('closeWaitlistBottom');
const staffSelectBackdrop = $('staffSelectBackdrop');
const closeStaffSelect = $('closeStaffSelect');
const closeStaffSelectBottom = $('closeStaffSelectBottom');
const serviceFeedbackBackdrop = $('serviceFeedbackBackdrop');
const closeServiceFeedback = $('closeServiceFeedback');
const closeServiceFeedbackBottom = $('closeServiceFeedbackBottom');
const serviceFeedbackServiceLabel = $('serviceFeedbackServiceLabel');
const serviceFeedbackText = $('serviceFeedbackText');
const serviceFeedbackCount = $('serviceFeedbackCount');
const serviceFeedbackSavedState = $('serviceFeedbackSavedState');
const saveServiceFeedbackBtn = $('saveServiceFeedback');
const bookingGuideBtn = $('bookingGuideBtn');
const bookingGuideHint = $('bookingGuideHint');
const guideBackdrop = $('guideBackdrop');
const closeGuide = $('closeGuide');
const closeGuideBottom = $('closeGuideBottom');

let managerAiDraftApproved = false;
let managerAiRevision = 0;
let managerAiLastGenerated = '';

// VISION 56 — một Booking Engine dùng chung cho Khách hàng và Quản lý đặt hộ.
let bookingContextRole = 'customer';
let managerBookingMode = 'registered';
let managerSelectedCustomerPhone = '';
let managerBookingImmediateMode = false;

const SERVICE_DATA = {
  'nail-care': {
    eyebrow: 'DỊCH VỤ CHĂM SÓC MÓNG',
    title: 'Chăm sóc móng',
    description: 'Làm sạch móng, chỉnh dáng, chăm sóc biểu bì và hoàn thiện với lớp sơn gel nhẹ nhàng, chỉn chu.',
    summary: 'Dịch vụ này phù hợp với khách muốn làm gọn gàng đôi tay, chăm sóc móng sạch đẹp và có lớp sơn bền, tôn phong cách cá nhân.',
    price: '180.000đ',
    duration: '60 phút',
    bufferMinutes: 10,
    image: 'assets/service-nail-care.png',
    steps: [
      { title: 'Kiểm tra và tư vấn kiểu móng', text: 'Kỹ thuật viên xem tình trạng móng, tư vấn kiểu dáng và màu sắc phù hợp.' },
      { title: 'Làm sạch và chỉnh form móng', text: 'Cắt da, dũa móng và xử lý bề mặt móng để chuẩn bị cho bước hoàn thiện.' },
      { title: 'Sơn và dưỡng hoàn thiện', text: 'Sơn gel hoặc phủ bóng, sau đó dưỡng da tay để móng lên màu đẹp và chỉn chu.' }
    ]
  },
  'goi-duong-sinh': {
    eyebrow: 'DỊCH VỤ GỘI ĐẦU DƯỠNG SINH',
    title: 'Gội đầu dưỡng sinh',
    description: 'Thư giãn da đầu, làm sạch tóc, massage và chăm sóc cơ thể nhẹ nhàng trong không gian êm dịu.',
    summary: 'Khách hàng sẽ được thư giãn với liệu trình gội đầu kết hợp massage, giúp da đầu sạch thoáng, cơ thể nhẹ nhàng và tinh thần dễ chịu hơn.',
    price: '250.000đ',
    duration: '75 phút',
    bufferMinutes: 10,
    image: 'assets/service-goi-duong-sinh.png',
    steps: [
      { title: 'Bước 1 — Thăm hỏi và tư vấn nhanh', text: 'Kỹ thuật viên hỏi sơ bộ tình trạng tóc, da đầu và nhu cầu thư giãn của khách.' },
      { title: 'Bước 2 — Thả lỏng vai gáy', text: 'Khách được thư giãn nhẹ vùng vai, cổ và gáy để cơ thể thoải mái hơn trước khi gội.' },
      { title: 'Bước 3 — Làm sạch da đầu và tóc', text: 'Tiến hành gội và làm sạch tóc bằng sản phẩm phù hợp, giúp da đầu thông thoáng.' },
      { title: 'Bước 4 — Massage da đầu', text: 'Massage nhẹ nhàng giúp thư giãn, giảm căng thẳng và hỗ trợ lưu thông.' },
      { title: 'Bước 5 — Ủ dưỡng hoặc chăm sóc bổ sung', text: 'Tùy gói dịch vụ có thể kết hợp ủ tóc, chăm sóc tóc hoặc thêm bước thư giãn dịu nhẹ.' },
      { title: 'Bước 6 — Sấy khô và hoàn thiện', text: 'Lau, sấy khô và chỉnh gọn tóc để khách kết thúc liệu trình trong trạng thái dễ chịu.' }
    ]
  },
  'beauty-relax': {
    eyebrow: 'DỊCH VỤ LÀM ĐẸP & THƯ GIÃN',
    title: 'Làm đẹp & thư giãn',
    description: 'Trải nghiệm làm đẹp trong không gian nhẹ nhàng với các bước chăm sóc và thư giãn cơ bản.',
    summary: 'Phù hợp với khách muốn vừa thư giãn vừa chăm sóc làn da hoặc gương mặt trong không gian spa dịu nhẹ.',
    price: '320.000đ',
    duration: '90 phút',
    bufferMinutes: 10,
    image: 'assets/service-beauty-relax.png',
    steps: [
      { title: 'Đón tiếp và tư vấn nhanh', text: 'Lắng nghe mong muốn của khách và giới thiệu gói chăm sóc phù hợp.' },
      { title: 'Làm sạch và thư giãn', text: 'Bắt đầu bằng các bước cơ bản để khách thư giãn và chuẩn bị cho liệu trình.' },
      { title: 'Chăm sóc hoàn thiện', text: 'Thực hiện các bước làm đẹp phù hợp và kết thúc bằng cảm giác nhẹ nhàng, tươi mới.' }
    ]
  }
};

const SERVICE_RESOURCE_CONFIG = {
  'nail-care': { tables: 3, label: 'bàn chăm sóc móng' },
  'goi-duong-sinh': { tables: 2, label: 'bàn gội đầu dưỡng sinh' },
  'beauty-relax': { tables: 4, label: 'bàn làm đẹp & thư giãn' }
};


const SERVICE_CATALOG_KEY = 'beauty_service_catalog_v37';
const SERVICE_OVERRIDE_KEY = 'beauty_service_overrides_v38';
const DEFAULT_SERVICE_IDS = ['nail-care', 'goi-duong-sinh', 'beauty-relax'];
const DEFAULT_SERVICE_DATA = JSON.parse(JSON.stringify(SERVICE_DATA));
const DEFAULT_SERVICE_RESOURCE_CONFIG = JSON.parse(JSON.stringify(SERVICE_RESOURCE_CONFIG));
const CUSTOM_SERVICE_ICON_CYCLE = ['✦','♡','◌','❦','✿','☾','◇'];
function serviceOverrideStoreRaw() {
  try {
    const value = JSON.parse(localStorage.getItem(SERVICE_OVERRIDE_KEY) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch { return {}; }
}
function saveServiceOverrideStore(data) { localStorage.setItem(SERVICE_OVERRIDE_KEY, JSON.stringify(data || {})); }
function isCustomServiceId(serviceId='') { return !DEFAULT_SERVICE_IDS.includes(serviceId); }
function serviceRecordById(serviceId='') { return serviceCatalogStoreRaw().find(item => item && item.id === serviceId) || null; }
function isServiceDeleted(serviceId='') {
  if (!serviceId) return true;
  if (isCustomServiceId(serviceId)) return !serviceRecordById(serviceId);
  return serviceOverrideStoreRaw()[serviceId]?.deleted === true;
}
function isServiceActive(serviceId='') {
  if (isServiceDeleted(serviceId)) return false;
  if (isCustomServiceId(serviceId)) {
    const record = serviceRecordById(serviceId);
    return record ? record.active !== false : false;
  }
  return serviceOverrideStoreRaw()[serviceId]?.active !== false;
}
function applyDefaultServiceOverrides() {
  const overrides = serviceOverrideStoreRaw();
  DEFAULT_SERVICE_IDS.forEach(id => {
    SERVICE_DATA[id] = JSON.parse(JSON.stringify(DEFAULT_SERVICE_DATA[id]));
    SERVICE_RESOURCE_CONFIG[id] = JSON.parse(JSON.stringify(DEFAULT_SERVICE_RESOURCE_CONFIG[id]));
    const override = overrides[id] || {};
    if (override.serviceData) SERVICE_DATA[id] = override.serviceData;
    if (override.resourceConfig) SERVICE_RESOURCE_CONFIG[id] = override.resourceConfig;
    if (override.guideData) GUIDE_DATA[id] = override.guideData;
  });
}
function saveServiceConfig(serviceId, { serviceData, resourceConfig, guideData, active, deleted } = {}) {
  if (!serviceId) return;
  if (serviceData) SERVICE_DATA[serviceId] = serviceData;
  if (resourceConfig) SERVICE_RESOURCE_CONFIG[serviceId] = resourceConfig;
  if (guideData) GUIDE_DATA[serviceId] = guideData;
  if (isCustomServiceId(serviceId)) {
    const store = serviceCatalogStoreRaw();
    const index = store.findIndex(item => item && item.id === serviceId);
    if (index >= 0) {
      store[index] = {
        ...store[index],
        ...(serviceData ? { serviceData } : {}),
        ...(resourceConfig ? { resourceConfig } : {}),
        ...(guideData ? { guideData } : {}),
        ...(typeof active === 'boolean' ? { active } : {}),
        ...(typeof deleted === 'boolean' ? { deleted } : {})
      };
      saveServiceCatalogStore(store);
    }
  } else {
    const overrides = serviceOverrideStoreRaw();
    const previous = overrides[serviceId] || {};
    overrides[serviceId] = {
      ...previous,
      ...(serviceData ? { serviceData } : {}),
      ...(resourceConfig ? { resourceConfig } : {}),
      ...(guideData ? { guideData } : {}),
      ...(typeof active === 'boolean' ? { active } : {}),
      ...(typeof deleted === 'boolean' ? { deleted } : {})
    };
    saveServiceOverrideStore(overrides);
  }
}
function serviceCatalogStoreRaw() {
  try {
    const value = JSON.parse(localStorage.getItem(SERVICE_CATALOG_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}
function saveServiceCatalogStore(items) { localStorage.setItem(SERVICE_CATALOG_KEY, JSON.stringify(Array.isArray(items) ? items : [])); }
function slugifyServiceId(name='') {
  const base = String(name || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/đ/g,'d')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
  return base || `service-${Date.now()}`;
}
function formatCurrencyLabel(value='') {
  const digits = String(value ?? '').replace(/[^0-9]/g,'');
  if (!digits) return '';
  return `${Number(digits).toLocaleString('vi-VN')}đ`;
}
function parseDurationLabel(value='') {
  const digits = String(value ?? '').replace(/[^0-9]/g,'');
  if (!digits) return '';
  return `${parseInt(digits,10)} phút`;
}
function serviceCardIcon(serviceId='') {
  const preset = { 'nail-care':'♡', 'goi-duong-sinh':'◌', 'beauty-relax':'✦' };
  if (preset[serviceId]) return preset[serviceId];
  const index = Math.abs(Array.from(String(serviceId)).reduce((sum,ch)=>sum + ch.charCodeAt(0), 0)) % CUSTOM_SERVICE_ICON_CYCLE.length;
  return CUSTOM_SERVICE_ICON_CYCLE[index];
}
function defaultGuideForService(serviceId, serviceData, resourceCfg) {
  return {
    intro: `Hướng dẫn nhanh khi khách đặt dịch vụ ${serviceData.title}.`,
    overview: [
      { label:'DỊCH VỤ', title: serviceData.title, text: serviceData.description || 'Khách hàng có thể xem nhanh nội dung dịch vụ trước khi đặt lịch.' },
      { label:'THỜI LƯỢNG', title: serviceData.duration, text: `Tổng thời gian giữ lịch gồm thời gian phục vụ khách và ${serviceTimingMetaV60(serviceData).bufferMinutes} phút đệm dọn dẹp sau phục vụ.` },
      { label:'TÀI NGUYÊN', title: `${resourceCfg.tables} bàn phục vụ`, text: 'Các bàn sẽ đổi màu theo trạng thái trống, chờ xác nhận hoặc đã được chủ chốt lịch.' }
    ],
    steps: [
      { title:`Bước 1 — Chọn dịch vụ ${serviceData.title}`, text:'Khách bấm vào thẻ dịch vụ để đưa đúng gói dịch vụ vào cửa sổ đặt lịch.' },
      { title:'Bước 2 — Chọn ngày hẹn và giờ bắt đầu', text:`Hệ thống sẽ tự tính giờ kết thúc dự kiến theo thời lượng ${serviceData.duration.toLowerCase()}.` },
      { title:'Bước 3 — Theo dõi tài nguyên phục vụ', text:`Khách có thể nhìn nhanh số lượng ${resourceCfg.label} còn trống trước khi gửi lịch.` },
      { title:'Bước 4 — Ghi chú thêm nếu cần', text:'Có thể ghi chú nhu cầu riêng để tiệm chủ động chuẩn bị tốt hơn.' },
      { title:'Bước 5 — Gửi lịch tới tiệm', text:'Sau khi xác nhận, lịch sẽ đi vào Lịch của tôi và chờ tiệm phản hồi.' }
    ]
  };
}
function loadCustomServicesIntoMemory() {
  applyDefaultServiceOverrides();
  serviceCatalogStoreRaw().forEach(item => {
    if (!item || !item.id || !item.serviceData) return;
    SERVICE_DATA[item.id] = item.serviceData;
    SERVICE_RESOURCE_CONFIG[item.id] = item.resourceConfig || { tables: Number(item.resourceConfig?.tables) || 1, label: item.resourceConfig?.label || 'bàn dịch vụ' };
    GUIDE_DATA[item.id] = item.guideData || defaultGuideForService(item.id, item.serviceData, SERVICE_RESOURCE_CONFIG[item.id]);
  });
}
function customServiceItems() {
  return serviceCatalogStoreRaw().filter(item => item && item.id && SERVICE_DATA[item.id]);
}
function buildServiceCardMarkup(serviceId, service, index, isCustom=false) {
  const isNail = serviceId === 'nail-care';
  return `
    <article class="service-card${serviceId === 'goi-duong-sinh' ? ' service-card-featured' : ''}${isCustom ? ' service-card-generated' : ''}" data-service-id="${serviceId}" role="button" tabindex="0" aria-label="Xem chi tiết dịch vụ ${escapeUiText(service.title)}">
      <span class="number">${String(index).padStart(2,'0')}</span>
      <div class="round-icon">${serviceCardIcon(serviceId)}</div>
      <img class="service-photo" src="${escapeUiText(service.image)}" alt="${escapeUiText(service.title)}" />
      <div class="service-copy">
        <h3${serviceId === 'goi-duong-sinh' ? ' class="goi-service-title"' : ''}>${escapeUiText(service.title)}</h3>
        <p>${escapeUiText(service.description || '')}</p>
        ${isNail ? '<button class="sample-btn-compact" type="button" data-open-nail-gallery>Mẫu móng</button>' : ''}
      </div>
      <div class="service-meta">
        <span><b>Giá dịch vụ</b><small>${escapeUiText(service.price || '')}</small></span>
        <span><b>Thời gian</b><small>${escapeUiText(service.duration || '')}</small></span>
      </div>
    </article>`;
}
function buildBookingServiceCardMarkup(serviceId, service, index) {
  return `
    <button class="booking-service-card booking-service-card-generated" type="button" data-booking-service="${serviceId}">
      <span class="booking-service-no">${String(index).padStart(2,'0')}</span>
      <img src="${escapeUiText(service.image)}" alt="${escapeUiText(service.title)}">
      <div class="booking-service-card-body">
        <h4${serviceId === 'goi-duong-sinh' ? ' class="booking-goi-title"' : ''}>${escapeUiText(service.title)}</h4>
        <p>${escapeUiText(service.description || '')}</p>
        <div class="booking-service-card-meta">
          <span>${escapeUiText(service.price || '')}</span>
          <span>${escapeUiText(service.duration || '')}</span>
        </div>
      </div>
    </button>`;
}
function bindServiceCards() {
  $$('[data-service-id]').forEach(card => {
    if (card.dataset.boundServiceCard === '1') return;
    card.dataset.boundServiceCard = '1';
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-open-nail-gallery]') || e.target.closest('.service-manager-controls') || e.target.closest('[data-service-delete]')) return;
      openServiceDetail(card.dataset.serviceId);
    });
    card.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('[data-open-nail-gallery]') && !e.target.closest('.service-manager-controls') && !e.target.closest('[data-service-delete]')) {
        e.preventDefault();
        openServiceDetail(card.dataset.serviceId);
      }
    });
  });
  $$('[data-open-nail-gallery]').forEach(btn => {
    if (btn.dataset.boundNailGallery === '1') return;
    btn.dataset.boundNailGallery = '1';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openNailGallery();
    });
  });
}
function refreshBookingServiceCards() {
  bookingServiceCards = Array.from(document.querySelectorAll('[data-booking-service]'));
  bookingServiceCards.forEach(card => {
    if (card.dataset.boundBookingCard === '1') return;
    card.dataset.boundBookingCard = '1';
    card.addEventListener('click', () => setBookingService(card.dataset.bookingService));
  });
}
function syncStaticServiceCard(serviceId='') {
  const card = serviceCardsGrid?.querySelector(`.service-card[data-service-id="${serviceId}"]`);
  const service = SERVICE_DATA[serviceId];
  if (!card || !service) return;
  const image = card.querySelector('.service-photo');
  const title = card.querySelector('.service-copy h3');
  const description = card.querySelector('.service-copy p');
  const price = card.querySelector('.service-meta span:first-child small');
  const duration = card.querySelector('.service-meta span:last-child small');
  if (image) { image.src = service.image || image.src; image.alt = service.title || image.alt; }
  if (title) title.textContent = service.title || '';
  if (description) description.textContent = service.description || '';
  if (price) price.textContent = service.price || '';
  if (duration) duration.textContent = service.duration || '';
  card.setAttribute('aria-label', `Xem chi tiết dịch vụ ${service.title || ''}`);
}
function renderDynamicServiceCards() {
  if (!serviceCardsGrid) return;
  const session = getSession();
  const isManager = session?.role === 'Quản lý';
  serviceCardsGrid.querySelectorAll('.service-card-generated').forEach(node => node.remove());
  DEFAULT_SERVICE_IDS.forEach(serviceId => {
    syncStaticServiceCard(serviceId);
    const card = serviceCardsGrid.querySelector(`.service-card[data-service-id="${serviceId}"]`);
    if (!card) return;
    const deleted = isServiceDeleted(serviceId);
    const active = isServiceActive(serviceId);
    card.hidden = deleted || (!isManager && !active);
    card.classList.toggle('service-card-inactive', isManager && !active && !deleted);
  });
  const customItems = customServiceItems();
  const anchor = managerAddServiceCard || null;
  customItems.forEach((item, idx) => {
    const active = item.active !== false;
    if (!isManager && !active) return;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = buildServiceCardMarkup(item.id, SERVICE_DATA[item.id], DEFAULT_SERVICE_IDS.length + idx + 1, true).trim();
    const el = wrapper.firstElementChild;
    el.classList.toggle('service-card-inactive', isManager && !active);
    if (anchor) serviceCardsGrid.insertBefore(el, anchor);
    else serviceCardsGrid.appendChild(el);
  });
  if (managerAddServiceCard) managerAddServiceCard.hidden = !isManager;
  bindServiceCards();
  renderManagerServiceControls();
}
function syncStaticBookingServiceCard(serviceId='') {
  const card = bookingServiceCardList?.querySelector(`[data-booking-service="${serviceId}"]`);
  const service = SERVICE_DATA[serviceId];
  if (!card || !service) return;
  const image = card.querySelector('img');
  const title = card.querySelector('.booking-service-card-body h4');
  const description = card.querySelector('.booking-service-card-body p');
  const meta = card.querySelectorAll('.booking-service-card-meta span');
  if (image) { image.src = service.image || image.src; image.alt = service.title || image.alt; }
  if (title) title.textContent = service.title || '';
  if (description) description.textContent = service.description || '';
  if (meta[0]) meta[0].textContent = service.price || '';
  if (meta[1]) meta[1].textContent = service.duration || '';
}
function renderDynamicBookingServiceCards() {
  if (!bookingServiceCardList) return;
  bookingServiceCardList.querySelectorAll('.booking-service-card-generated').forEach(node => node.remove());
  bookingServiceCardList.querySelectorAll('[data-booking-service]:not(.booking-service-card-generated)').forEach(card => {
    const serviceId = card.dataset.bookingService || '';
    syncStaticBookingServiceCard(serviceId);
    card.hidden = isServiceDeleted(serviceId) || !isServiceActive(serviceId);
  });
  const customItems = customServiceItems();
  customItems.forEach((item, idx) => {
    if (item.active === false) return;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = buildBookingServiceCardMarkup(item.id, SERVICE_DATA[item.id], DEFAULT_SERVICE_IDS.length + idx + 1).trim();
    bookingServiceCardList.appendChild(wrapper.firstElementChild);
  });
  refreshBookingServiceCards();
}
function renderServiceCatalogEverywhere() {
  renderDynamicServiceCards();
  renderDynamicBookingServiceCards();
  bindServiceCards();
  refreshBookingServiceCards();
  renderManagerServiceControls();
  ensureServiceCodes();
  expenseRefreshFilterOptions();
  if ($('bookingService')) {
    const selected = $('bookingService').value;
    if (!selected || !SERVICE_DATA[selected] || !isServiceActive(selected)) {
      const fallback = DEFAULT_SERVICE_IDS.find(id => isServiceActive(id)) || customServiceItems().find(item => item.active !== false)?.id || 'nail-care';
      $('bookingService').value = fallback;
    }
  }
  updateBookingSummary();
}
function defaultServiceProcedure(title='', description='') {
  const safeTitle = String(title || 'dịch vụ').trim() || 'dịch vụ';
  const safeDescription = String(description || '').trim() || `Thực hiện các bước chính của ${safeTitle}.`;
  return [
    { title:'Bước 1 — Đón khách và tư vấn nhanh', text:`Kỹ thuật viên tiếp nhận nhu cầu và tư vấn sơ bộ cho dịch vụ ${safeTitle}.` },
    { title:'Bước 2 — Thực hiện dịch vụ chính', text:safeDescription },
    { title:'Bước 3 — Hoàn thiện và dặn dò', text:`Kết thúc dịch vụ ${safeTitle}, kiểm tra lại trải nghiệm và dặn dò khách nếu cần.` }
  ];
}
function renderManagerServiceSteps(steps=[]) {
  if (!managerServiceStepsEditor) return;
  const list = Array.isArray(steps) && steps.length ? steps : defaultServiceProcedure(managerServiceName?.value || '', managerServiceDescription?.value || '');
  managerServiceStepsEditor.innerHTML = list.map((step,index) => `
    <div class="manager-service-step-row" data-service-step-row>
      <span class="manager-service-step-index">${String(index+1).padStart(2,'0')}</span>
      <div class="manager-service-step-fields">
        <input type="text" data-service-step-title value="${escapeUiText(step?.title || `Bước ${index+1}`)}" placeholder="Tên bước ${index+1}">
        <textarea data-service-step-text rows="2" placeholder="Mô tả bước ${index+1}">${escapeUiText(step?.text || '')}</textarea>
      </div>
      <button class="manager-service-step-remove" type="button" data-service-step-remove title="Xóa bước này" aria-label="Xóa bước ${index+1}">×</button>
    </div>`).join('');
  managerServiceStepsEditor.querySelectorAll('[data-service-step-remove]').forEach(btn => btn.addEventListener('click', () => {
    btn.closest('[data-service-step-row]')?.remove();
    renumberManagerServiceSteps();
  }));
}
function renumberManagerServiceSteps() {
  managerServiceStepsEditor?.querySelectorAll('[data-service-step-row]').forEach((row,index) => {
    const badge = row.querySelector('.manager-service-step-index');
    if (badge) badge.textContent = String(index+1).padStart(2,'0');
  });
}
function managerServiceStepsData() {
  if (!managerServiceStepsEditor) return [];
  return Array.from(managerServiceStepsEditor.querySelectorAll('[data-service-step-row]')).map((row,index) => {
    const title = row.querySelector('[data-service-step-title]')?.value.trim() || `Bước ${index+1}`;
    const text = row.querySelector('[data-service-step-text]')?.value.trim() || '';
    return { title, text };
  }).filter(item => item.title || item.text);
}
function addManagerServiceStep() {
  const steps = managerServiceStepsData();
  steps.push({ title:`Bước ${steps.length+1}`, text:'' });
  renderManagerServiceSteps(steps);
  managerServiceStepsEditor?.lastElementChild?.querySelector('[data-service-step-title]')?.focus();
}
function resetManagerServiceForm() {
  if (managerServiceForm) managerServiceForm.reset();
  if (managerServiceImagePreview) {
    managerServiceImagePreview.src = 'assets/service-goi-duong-sinh.png';
    managerServiceImagePreview.dataset.existingImage = 'assets/service-goi-duong-sinh.png';
  }
  if (managerServiceMessage) managerServiceMessage.textContent = '';
  if (managerServiceBuffer) managerServiceBuffer.value = '10';
  managerServiceMode = 'create';
  managerServiceEditingId = '';
  managerServiceDraftLock = { description:false, summary:false };
  if (managerServiceHeading) managerServiceHeading.textContent = 'Tạo thẻ dịch vụ mới';
  if (managerServiceModeLabel) managerServiceModeLabel.textContent = 'Thêm dịch vụ mới';
  if (managerServiceSubtitle) managerServiceSubtitle.textContent = 'Khi bạn tạo xong, dịch vụ mới sẽ xuất hiện ngay ở giao diện Quản lý, giao diện Khách hàng và trong luồng đặt lịch.';
  if (managerServiceSubmitLabel) managerServiceSubmitLabel.textContent = 'OK tạo dịch vụ';
  if (managerServiceDescription) delete managerServiceDescription.dataset.aiSource;
  if (managerServiceSummary) delete managerServiceSummary.dataset.aiSource;
  renderManagerServiceSteps(defaultServiceProcedure());
  updateManagerServiceTimingPreviewV60();
}


function generateServiceAssistantContent(title='') {
  const plain = String(title || '').trim();
  const normalized = plain.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/đ/g,'d');
  const make = (description, summary) => ({ description, summary });
  if (!plain) return make('', '');
  if (/(massage|mat xa|xoa bop|an huyet)/.test(normalized)) {
    return make(
      `${plain} giúp khách thư giãn, thả lỏng cơ thể và cảm nhận sự dễ chịu rõ rệt sau mỗi buổi chăm sóc.`,
      `Liệu trình ${plain.toLowerCase()} tập trung vào trải nghiệm thư giãn nhẹ nhàng, hỗ trợ giảm mỏi cơ, xoa dịu căng thẳng và mang lại cảm giác phục hồi dễ chịu cho khách hàng.`
    );
  }
  if (/(goi|toc|duong sinh)/.test(normalized)) {
    return make(
      `${plain} kết hợp làm sạch, thư giãn và chăm sóc nhẹ nhàng để khách cảm thấy thoải mái hơn sau một ngày dài.`,
      `Dịch vụ ${plain.toLowerCase()} phù hợp với khách muốn thư giãn và phục hồi năng lượng. Khách sẽ được chăm sóc theo quy trình êm dịu, giúp cơ thể nhẹ nhàng hơn và tinh thần dễ chịu hơn sau khi sử dụng.`
    );
  }
  if (/(mong|nail|son|gel)/.test(normalized)) {
    return make(
      `${plain} giúp đôi tay gọn gàng, chỉn chu và tôn lên phong cách riêng của khách với cảm giác chăm sóc nhẹ nhàng.`,
      `Dịch vụ ${plain.toLowerCase()} phù hợp với khách muốn chăm sóc móng sạch đẹp và hoàn thiện diện mạo chỉn chu hơn. Khách sẽ được tư vấn kiểu phù hợp, chăm sóc kỹ phần móng và hoàn thiện bằng quy trình nhẹ nhàng, thẩm mỹ.`
    );
  }
  if (/(da|facial|spa|relax|thu gian|lam dep)/.test(normalized)) {
    return make(
      `${plain} mang đến trải nghiệm chăm sóc nhẹ nhàng trong không gian thư giãn, giúp khách cảm thấy tươi tắn và dễ chịu hơn.`,
      `Dịch vụ ${plain.toLowerCase()} được xây dựng để kết hợp giữa chăm sóc và thư giãn. Khách sẽ được trải nghiệm quy trình phù hợp với nhu cầu làm đẹp, mang lại cảm giác thoải mái, chỉn chu và dễ chịu sau khi hoàn thành.`
    );
  }
  return make(
    `${plain} là dịch vụ được thiết kế để khách dễ trải nghiệm, cảm nhận rõ sự chăm sóc chỉn chu và thoải mái ngay trong buổi sử dụng.`,
    `Dịch vụ ${plain.toLowerCase()} phù hợp với khách muốn có một trải nghiệm chăm sóc nhẹ nhàng, rõ ràng và dễ tiếp cận. Tiệm sẽ tư vấn, thực hiện đúng quy trình và giúp khách cảm thấy yên tâm, thoải mái trong suốt thời gian sử dụng dịch vụ.`
  );
}
function autofillManagerServiceDraft(force=false) {
  if (managerServiceMode !== 'create') return;
  const title = managerServiceName?.value.trim() || '';
  if (title.length < 2) return;
  const draft = generateServiceAssistantContent(title);
  if (managerServiceDescription && (force || (!managerServiceDraftLock.description && (!(managerServiceDescription.value || '').trim() || managerServiceDescription.dataset.aiSource)))) {
    managerServiceDescription.value = draft.description;
    managerServiceDescription.dataset.aiSource = title;
  }
  if (managerServiceSummary && (force || (!managerServiceDraftLock.summary && (!(managerServiceSummary.value || '').trim() || managerServiceSummary.dataset.aiSource)))) {
    managerServiceSummary.value = draft.summary;
    managerServiceSummary.dataset.aiSource = title;
  }
  if (managerServiceMessage) {
    managerServiceMessage.className = 'form-message ok';
    managerServiceMessage.textContent = 'AI đã tự gợi ý mô tả ngắn và tóm tắt chi tiết. Bạn vẫn có thể sửa tay nếu muốn.';
  }
}
function openManagerServiceModal(serviceId='') {
  const session = getSession();
  if (session?.role !== 'Quản lý') {
    showToast('Chỉ tài khoản Quản lý mới có thể thêm hoặc sửa dịch vụ.');
    return;
  }
  resetManagerServiceForm();
  if (serviceId && SERVICE_DATA[serviceId]) {
    managerServiceMode = 'edit';
    managerServiceEditingId = serviceId;
    const service = SERVICE_DATA[serviceId];
    const resource = SERVICE_RESOURCE_CONFIG[serviceId] || { tables: 1 };
    if (managerServiceHeading) managerServiceHeading.textContent = `Sửa dịch vụ: ${service.title}`;
    if (managerServiceModeLabel) managerServiceModeLabel.textContent = 'Sửa đổi dịch vụ';
    if (managerServiceSubtitle) managerServiceSubtitle.textContent = 'Sau khi lưu, các thay đổi sẽ cập nhật ngay ở cả giao diện Quản lý, giao diện Khách hàng và trong luồng đặt lịch.';
    if (managerServiceSubmitLabel) managerServiceSubmitLabel.textContent = 'Lưu thay đổi';
    if (managerServiceName) managerServiceName.value = service.title || '';
    if (managerServicePrice) managerServicePrice.value = String(service.price || '').replace(/[^0-9]/g, '');
    if (managerServiceDuration) managerServiceDuration.value = String(service.duration || '').replace(/[^0-9]/g, '');
    if (managerServiceBuffer) managerServiceBuffer.value = String(serviceTimingMetaV60(service).bufferMinutes);
    updateManagerServiceTimingPreviewV60();
    if (managerServiceTables) managerServiceTables.value = String(resource.tables || 1);
    if (managerServiceDescription) managerServiceDescription.value = service.description || '';
    if (managerServiceSummary) managerServiceSummary.value = service.summary || '';
    renderManagerServiceSteps(Array.isArray(service.steps) && service.steps.length ? service.steps : defaultServiceProcedure(service.title, service.description));
    managerServiceDraftLock = { description:true, summary:true };
    if (managerServiceImagePreview) {
      managerServiceImagePreview.src = service.image || 'assets/service-goi-duong-sinh.png';
      managerServiceImagePreview.dataset.existingImage = service.image || 'assets/service-goi-duong-sinh.png';
    }
  }
  managerServiceBackdrop?.classList.add('open');
  managerServiceBackdrop?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  const modal = managerServiceBackdrop?.querySelector('.manager-service-modal');
  if (modal) modal.scrollTop = 0;
  setTimeout(() => managerServiceName?.focus(), 60);
}
function closeManagerServiceModal() {
  managerServiceBackdrop?.classList.remove('open');
  managerServiceBackdrop?.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function readManagerServiceImageFile() {
  return new Promise((resolve) => {
    const file = managerServiceImage?.files?.[0];
    if (!file) return resolve(managerServiceImagePreview?.dataset.existingImage || 'assets/service-goi-duong-sinh.png');
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || managerServiceImagePreview?.dataset.existingImage || 'assets/service-goi-duong-sinh.png'));
    reader.onerror = () => resolve(managerServiceImagePreview?.dataset.existingImage || 'assets/service-goi-duong-sinh.png');
    reader.readAsDataURL(file);
  });
}
function renderManagerServiceControls() {
  const session = getSession();
  const isManager = session?.role === 'Quản lý';
  document.querySelectorAll('.service-card[data-service-id]').forEach(card => {
    const serviceId = card.dataset.serviceId || '';
    let controls = card.querySelector('.service-manager-controls');
    if (!isManager) {
      controls?.remove();
      card.querySelector('[data-service-delete]')?.remove();
      card.classList.remove('service-card-inactive');
      return;
    }
    const active = isServiceActive(serviceId);
    card.classList.toggle('service-card-inactive', !active);
    let deleteBtn = card.querySelector('[data-service-delete]');
    if (!deleteBtn) {
      deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'service-manager-delete';
      deleteBtn.dataset.serviceDelete = serviceId;
      deleteBtn.setAttribute('aria-label', `Xóa vĩnh viễn dịch vụ ${SERVICE_DATA[serviceId]?.title || ''}`);
      deleteBtn.title = 'Xóa vĩnh viễn dịch vụ';
      deleteBtn.textContent = '×';
      card.appendChild(deleteBtn);
    }
    if (deleteBtn.dataset.boundClick !== '1') {
      deleteBtn.dataset.boundClick = '1';
      deleteBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        permanentlyDeleteService(serviceId);
      });
    }
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'service-manager-controls';
      controls.innerHTML = `
        <span class="service-manager-status"></span>
        <div class="service-manager-toggle" role="group" aria-label="Bật tắt dịch vụ">
          <button type="button" data-service-state="on" data-service-id="${serviceId}">ON</button>
          <button type="button" data-service-state="off" data-service-id="${serviceId}">OFF</button>
        </div>
        ${serviceId === 'nail-care' ? '<button type="button" class="service-manager-nail-library" data-open-manager-nail-library>Thư viện mẫu móng</button>' : ''}
        <button type="button" class="service-manager-edit" data-service-edit="${serviceId}">Sửa đổi</button>`;
      card.appendChild(controls);
    }
    const status = controls.querySelector('.service-manager-status');
    if (status) {
      status.textContent = active ? 'Đang bật cho khách đặt' : 'Đang tắt phía khách';
      status.classList.toggle('off', !active);
    }
    controls.querySelectorAll('[data-service-state]').forEach(btn => {
      const onState = btn.dataset.serviceState === 'on';
      btn.classList.toggle('is-active', active === onState);
      btn.classList.toggle('on', onState);
      btn.classList.toggle('off', !onState);
      if (btn.dataset.boundClick === '1') return;
      btn.dataset.boundClick = '1';
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const nextActive = btn.dataset.serviceState === 'on';
        saveServiceConfig(serviceId, { active: nextActive });
        renderServiceCatalogEverywhere();
        showToast(nextActive ? `Đã bật lại dịch vụ ${SERVICE_DATA[serviceId]?.title || ''} cho khách hàng.` : `Đã tắt dịch vụ ${SERVICE_DATA[serviceId]?.title || ''} phía khách hàng.`);
      });
    });
    const nailLibraryBtn = controls.querySelector('[data-open-manager-nail-library]');
    if (nailLibraryBtn && nailLibraryBtn.dataset.boundClick !== '1') {
      nailLibraryBtn.dataset.boundClick = '1';
      nailLibraryBtn.addEventListener('click', (event) => {
        event.preventDefault(); event.stopPropagation();
        openNailGallery('manage');
      });
    }
    const editBtn = controls.querySelector('[data-service-edit]');
    if (editBtn && editBtn.dataset.boundClick !== '1') {
      editBtn.dataset.boundClick = '1';
      editBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        openManagerServiceModal(serviceId);
      });
    }
  });
}
function permanentlyDeleteService(serviceId='') {
  const service = SERVICE_DATA[serviceId];
  if (!serviceId || !service) return;
  const title = service.title || 'dịch vụ';
  if (isCustomServiceId(serviceId)) {
    const next = serviceCatalogStoreRaw().filter(item => item?.id !== serviceId);
    saveServiceCatalogStore(next);
    delete SERVICE_DATA[serviceId];
    delete SERVICE_RESOURCE_CONFIG[serviceId];
    delete GUIDE_DATA[serviceId];
  } else {
    const overrides = serviceOverrideStoreRaw();
    overrides[serviceId] = { ...(overrides[serviceId] || {}), deleted:true, active:false };
    saveServiceOverrideStore(overrides);
  }
  if ($('bookingService')?.value === serviceId) $('bookingService').value = '';
  renderServiceCatalogEverywhere();
  showToast(`Đã xóa vĩnh viễn dịch vụ ${title}. Dịch vụ không còn hiển thị cho khách.`);
}
function serviceLaunchGreeting(account={}) {
  const gender = normalizeCustomerGender(account.gender || '');
  const pronoun = gender === 'Nam' ? 'anh' : gender === 'Nữ' ? 'chị' : 'bạn';
  return { pronoun, givenName: customerGivenName(account.name || '') };
}
function broadcastNewServiceAnnouncement(serviceId='', service={}) {
  const customers = customerAccountsList();
  if (!customers.length || !service?.title) return;
  const salon = salonProfile().name || 'tiệm';
  const now = new Date().toISOString();
  const data = notificationStore();
  const createdIds = [];
  customers.forEach((account,index) => {
    const phone = normalizePhone(account.phone || '');
    if (!phone) return;
    const {pronoun, givenName} = serviceLaunchGreeting(account);
    const pricePart = service.price ? ` với giá ${service.price}` : '';
    const durationPart = service.duration ? `, thời lượng khoảng ${service.duration}` : '';
    const content = `${salon} vừa bổ sung dịch vụ mới “${service.title}”.

${service.summary || service.description || ''}

Giá dịch vụ: ${service.price || 'Liên hệ tiệm'}
Thời gian: ${service.duration || 'Theo tư vấn tại tiệm'}

Nếu ${pronoun} muốn trải nghiệm, ${pronoun} có thể mở mục Dịch vụ và đặt lịch trực tiếp trên ứng dụng. ${salon} rất mong sớm được phục vụ ${pronoun} ${givenName}.`;
    const audioText = `Em chào ${pronoun} ${givenName} ạ. ${salon} vừa có dịch vụ mới là ${service.title}${pricePart}${durationPart}. ${service.description || 'Đây là một trải nghiệm chăm sóc mới được tiệm chuẩn bị dành cho khách hàng.'} Nếu ${pronoun} muốn trải nghiệm, ${pronoun} có thể vào mục dịch vụ để xem và đặt lịch. ${salon} rất mong sớm được phục vụ ${pronoun} ạ.`;
    const id = `service-launch-${serviceId}-${Date.now()}-${index}`;
    createdIds.push(id);
    data.unshift({
      id,
      recipientPhone:phone,
      recipientRole:'Khách hàng',
      type:'announcement',
      title:`Dịch vụ mới: ${service.title}`,
      message:`${salon} vừa bổ sung dịch vụ ${service.title}. Bấm để xem chi tiết hoặc nghe thông báo.`,
      content,
      audioText,
      serviceId,
      sender:salon,
      createdAt:now,
      read:false,
      source:'service-launch'
    });
  });
  saveNotificationStore(data);
  return createdIds;
}
async function handleManagerServiceCreate(event) {
  event.preventDefault();
  if (!managerServiceMessage) return;
  managerServiceMessage.className = 'form-message';
  const title = managerServiceName?.value.trim() || '';
  if (managerServiceMode === 'create' && title && (!(managerServiceDescription?.value || '').trim() || !(managerServiceSummary?.value || '').trim())) {
    autofillManagerServiceDraft(true);
  }
  const price = formatCurrencyLabel(managerServicePrice?.value || '');
  const duration = parseDurationLabel(managerServiceDuration?.value || '');
  const totalMinutes = durationToMinutes(duration);
  const bufferMinutes = Math.max(0, Math.floor(Number(managerServiceBuffer?.value) || 0));
  const tables = Math.max(1, Math.min(20, Number(managerServiceTables?.value) || 1));
  const description = (managerServiceDescription?.value || '').trim();
  const summary = (managerServiceSummary?.value || '').trim();
  if (title.length < 2) { managerServiceMessage.textContent = 'Vui lòng nhập tên dịch vụ.'; return; }
  if (!price) { managerServiceMessage.textContent = 'Vui lòng nhập giá dịch vụ hợp lệ.'; return; }
  if (!duration) { managerServiceMessage.textContent = 'Vui lòng nhập thời gian hợp lệ.'; return; }
  if (bufferMinutes >= totalMinutes) { managerServiceMessage.textContent = 'Thời gian đệm phải nhỏ hơn Tổng thời gian giữ lịch.'; return; }
  if (description.length < 8) { managerServiceMessage.textContent = 'Vui lòng nhập mô tả ngắn rõ hơn cho thẻ dịch vụ.'; return; }
  if (summary.length < 12) { managerServiceMessage.textContent = 'Vui lòng nhập tóm tắt chi tiết hơn để khách dễ hiểu dịch vụ.'; return; }
  let serviceId = managerServiceEditingId;
  if (!serviceId) {
    const idBase = slugifyServiceId(title);
    const existing = new Set([...Object.keys(SERVICE_DATA), ...serviceCatalogStoreRaw().map(item => item.id)]);
    serviceId = idBase;
    let suffix = 1;
    while (existing.has(serviceId)) { suffix += 1; serviceId = `${idBase}-${suffix}`; }
  }
  const image = await readManagerServiceImageFile();
  const serviceData = {
    eyebrow: `DỊCH VỤ ${title.toUpperCase()}`,
    title,
    description,
    summary,
    price,
    duration,
    bufferMinutes,
    image,
    steps: managerServiceStepsData().length ? managerServiceStepsData() : defaultServiceProcedure(title, description)
  };
  const resourceConfig = { tables, label: `bàn ${title.toLowerCase()}` };
  const guideData = defaultGuideForService(serviceId, serviceData, resourceConfig);
  if (managerServiceMode === 'edit' && managerServiceEditingId) {
    const active = isServiceActive(serviceId);
    saveServiceConfig(serviceId, { serviceData, resourceConfig, guideData, active });
    renderServiceCatalogEverywhere();
    closeManagerServiceModal();
    showToast(`Đã cập nhật dịch vụ: ${title}. Mọi giao diện liên quan đã được làm mới.`);
    return;
  }
  const store = serviceCatalogStoreRaw();
  store.push({ id:serviceId, createdAt:new Date().toISOString(), active:true, serviceData, resourceConfig, guideData });
  saveServiceCatalogStore(store);
  SERVICE_DATA[serviceId] = serviceData;
  SERVICE_RESOURCE_CONFIG[serviceId] = resourceConfig;
  GUIDE_DATA[serviceId] = guideData;
  renderServiceCatalogEverywhere();
  broadcastNewServiceAnnouncement(serviceId, serviceData);
  closeManagerServiceModal();
  showToast(`Đã tạo dịch vụ mới: ${title}. Dịch vụ đã xuất hiện phía Khách và thông báo giới thiệu đã được gửi tới tất cả khách hàng.`);
}
const GUIDE_DATA = {
  'nail-care': {
    intro: 'Hướng dẫn cơ bản cho khách đặt dịch vụ Chăm sóc móng.',
    overview: [
      { label: 'CẦN CHỌN', title: 'Mẫu móng', text: 'Khách nên chọn trước mẫu móng để đến tiệm làm nhanh hơn.' },
      { label: 'TÀI NGUYÊN', title: '3 bàn chăm sóc', text: 'Quan sát màu bàn để biết còn trống, đang chờ xác nhận hay đã được chủ chốt lịch.' },
      { label: 'GHI CHÚ', title: 'Nhu cầu thêm', text: 'Có thể ghi chú tone màu, kiểu sơn hoặc yêu cầu đặc biệt.' }
    ],
    steps: [
      { title: 'Bước 1 — Chọn dịch vụ Chăm sóc móng', text: 'Bấm vào thẻ dịch vụ ở bên phải để đưa đúng dịch vụ vào lịch hẹn.' },
      { title: 'Bước 2 — Chọn mẫu móng nếu bạn muốn', text: 'Bấm vào ô “Mẫu móng” để mở thư viện mẫu đang có tại tiệm và chọn mã bạn thích.' },
      { title: 'Bước 3 — Chọn ngày hẹn và giờ bắt đầu', text: 'Hệ thống sẽ tự tính giờ kết thúc dự kiến dựa trên thời lượng 60 phút của dịch vụ.' },
      { title: 'Bước 4 — Xem màu trạng thái 3 bàn', text: 'Màu xanh là còn trống; màu vàng cam là đã có khách đặt nhưng chủ chưa xác nhận; màu đỏ là chủ đã xác nhận lịch.' },
      { title: 'Bước 5 — Ghi chú và xác nhận', text: 'Nếu cần, bạn có thể ghi chú thêm rồi bấm “Xác nhận đặt lịch”. Lịch sẽ xuất hiện trong “Lịch của tôi”.' }
    ]
  },
  'goi-duong-sinh': {
    intro: 'Hướng dẫn ngắn gọn khi đặt dịch vụ Gội đầu dưỡng sinh.',
    overview: [
      { label: 'TRỌNG TÂM', title: 'Chọn giờ phù hợp', text: 'Nên chọn giờ bạn có thể thư giãn thoải mái vì liệu trình kéo dài 75 phút.' },
      { label: 'KHẢO SÁT', title: 'Xem khách chờ', text: 'Có thể mở “Danh sách khách chờ” để xem dịch vụ này đang đông hay vắng.' },
      { label: 'GHI CHÚ', title: 'Da đầu / tóc', text: 'Bạn có thể ghi chú nếu da đầu nhạy cảm hoặc muốn ưu tiên giờ sớm.' }
    ],
    steps: [
      { title: 'Bước 1 — Chọn dịch vụ Gội đầu dưỡng sinh', text: 'Bấm vào thẻ dịch vụ ở bên phải để chuyển sang đúng gói dịch vụ này.' },
      { title: 'Bước 2 — Chọn ngày và giờ bắt đầu', text: 'Hệ thống sẽ tự tính giờ kết thúc dự kiến theo thời lượng 75 phút.' },
      { title: 'Bước 3 — Tham khảo danh sách khách chờ', text: 'Nếu muốn, bạn có thể mở danh sách khách chờ để xem các khung giờ đang đông.' },
      { title: 'Bước 4 — Ghi chú thêm', text: 'Nhập ghi chú nếu bạn cần chăm sóc nhẹ nhàng hơn hoặc có nhu cầu riêng.' },
      { title: 'Bước 5 — Gửi lịch tới tiệm', text: 'Sau khi xác nhận, lịch sẽ được đưa vào “Lịch của tôi” để bạn theo dõi.' }
    ]
  },
  'beauty-relax': {
    intro: 'Hướng dẫn cơ bản khi đặt dịch vụ Làm đẹp & thư giãn.',
    overview: [
      { label: 'LIỆU TRÌNH', title: '90 phút', text: 'Dịch vụ có thời lượng dài hơn nên bạn nên chọn khung giờ thật thoải mái.' },
      { label: 'THAM KHẢO', title: 'Khách chờ', text: 'Có thể xem trước danh sách khách chờ của riêng dịch vụ này.' },
      { label: 'GỢI Ý', title: 'Nhu cầu làm đẹp', text: 'Bạn nên ghi rõ mong muốn để tiệm phục vụ sát nhu cầu hơn.' }
    ],
    steps: [
      { title: 'Bước 1 — Chọn dịch vụ Làm đẹp & thư giãn', text: 'Bấm vào thẻ dịch vụ bên phải để chọn đúng liệu trình bạn muốn đặt.' },
      { title: 'Bước 2 — Chọn ngày hẹn và giờ bắt đầu', text: 'Giờ kết thúc dự kiến sẽ được hệ thống tự tính theo thời lượng 90 phút.' },
      { title: 'Bước 3 — Xem danh sách khách chờ nếu cần', text: 'Bạn có thể kiểm tra mức độ đông của riêng dịch vụ này trong ngày đã chọn.' },
      { title: 'Bước 4 — Ghi chú mong muốn', text: 'Có thể ghi chú thêm về mục tiêu thư giãn, làm đẹp hoặc yêu cầu ưu tiên.' },
      { title: 'Bước 5 — Xác nhận lịch hẹn', text: 'Khi gửi lịch thành công, thông tin sẽ được lưu trong “Lịch của tôi”.' }
    ]
  }
};

const views = ['registerView','loginView','registerOtpView','forgotView','forgotOtpView','resetPasswordView','successView'].map($);
let currentRole = 'Khách hàng';
let registerOtp = '';
let forgotOtp = '';
let pendingRegistration = null;
let resetPhone = '';
let successAction = 'close';
let currentNotificationTab = 'unread';
let currentBookingServiceId = 'nail-care';
let staffSelectionAppointmentId = null;
let serviceFeedbackAppointmentId = null;
const NAIL_SAMPLE_KEY = 'beauty_nail_samples_v40';
const DEFAULT_NAIL_SAMPLES = [
  {id:'nail-01',code:'Mẫu 01',name:'Hồng sữa thanh lịch',description:'Phong cách nhẹ nhàng, phù hợp đi làm và đi chơi.',image:'assets/nail-sample-1.png'},
  {id:'nail-02',code:'Mẫu 02',name:'Hồng ánh bóng',description:'Màu hồng nữ tính, bề mặt bóng đẹp, dễ phối trang phục.',image:'assets/nail-sample-2.png'},
  {id:'nail-03',code:'Mẫu 03',name:'Nude đào nhẹ nhàng',description:'Tông tự nhiên, tinh tế và gọn gàng cho khách thích đơn giản.',image:'assets/nail-sample-1.png'},
  {id:'nail-04',code:'Mẫu 04',name:'Ombre hồng sữa',description:'Hiệu ứng chuyển màu nhẹ, tạo cảm giác mềm mại và sang.',image:'assets/nail-sample-2.png'},
  {id:'nail-05',code:'Mẫu 05',name:'Đính charm nhẹ',description:'Thêm điểm nhấn xinh xắn cho khách thích phong cách nữ tính.',image:'assets/nail-sample-1.png'},
  {id:'nail-06',code:'Mẫu 06',name:'Tiệc tối ánh hồng',description:'Phù hợp đi tiệc, chụp ảnh hoặc dịp đặc biệt.',image:'assets/nail-sample-2.png'}
];
function nailSampleStore() {
  try {
    const raw = localStorage.getItem(NAIL_SAMPLE_KEY);
    if (!raw) {
      localStorage.setItem(NAIL_SAMPLE_KEY, JSON.stringify(DEFAULT_NAIL_SAMPLES));
      return DEFAULT_NAIL_SAMPLES.map(item => ({...item}));
    }
    const value = JSON.parse(raw);
    return Array.isArray(value) ? value : DEFAULT_NAIL_SAMPLES.map(item => ({...item}));
  } catch { return DEFAULT_NAIL_SAMPLES.map(item => ({...item})); }
}
function saveNailSampleStore(items=[]) { localStorage.setItem(NAIL_SAMPLE_KEY, JSON.stringify(Array.isArray(items) ? items : [])); }
function nailSampleMarkup(item={}, manage=false) {
  return `<article class="nail-sample-card" data-nail-id="${escapeUiText(item.id || '')}" data-nail-code="${escapeUiText(item.code || '')}" data-nail-name="${escapeUiText(item.name || '')}" data-nail-image="${escapeUiText(item.image || '')}">
    ${manage ? `<button class="nail-sample-delete-btn" type="button" data-delete-nail-sample="${escapeUiText(item.id || '')}" aria-label="Xóa ${escapeUiText(item.code || 'mẫu móng')}">×</button>` : ''}
    <img src="${escapeUiText(item.image || 'assets/nail-sample-1.png')}" alt="${escapeUiText(item.name || 'Mẫu móng')}" />
    <div><strong>${escapeUiText(item.code || '')} — ${escapeUiText(item.name || '')}</strong><span>${escapeUiText(item.description || '')}</span>${manage ? '' : '<button class="nail-sample-pick-btn" type="button">Chọn mẫu này</button>'}</div>
  </article>`;
}
function bindNailGalleryCards() {
  nailSampleCards = Array.from(document.querySelectorAll('.nail-sample-card[data-nail-code]'));
  nailSampleCards.forEach(card => {
    const pick = card.querySelector('.nail-sample-pick-btn');
    if (pick && pick.dataset.boundPick !== '1') {
      pick.dataset.boundPick = '1';
      pick.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); chooseNailSampleFromCard(card); });
    }
    if (card.dataset.boundCard !== '1') {
      card.dataset.boundCard = '1';
      card.addEventListener('click', () => { if (nailGalleryMode === 'booking') chooseNailSampleFromCard(card); });
    }
  });
  document.querySelectorAll('[data-delete-nail-sample]').forEach(btn => {
    if (btn.dataset.boundDelete === '1') return;
    btn.dataset.boundDelete = '1';
    btn.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      const id = btn.dataset.deleteNailSample || '';
      const next = nailSampleStore().filter(item => item.id !== id);
      saveNailSampleStore(next);
      renderNailGallery();
      showToast('Đã xóa mẫu móng khỏi thư viện.');
    });
  });
}
function renderNailGallery() {
  if (!nailGalleryGrid) return;
  const manage = nailGalleryMode === 'manage' && getSession()?.role === 'Quản lý';
  const items = nailSampleStore();
  nailGalleryGrid.innerHTML = items.length ? items.map(item => nailSampleMarkup(item, manage)).join('') : '<div class="nail-library-empty">Thư viện hiện chưa có mẫu móng nào.</div>';
  if (managerNailLibraryTools) managerNailLibraryTools.hidden = !manage;
  if (managerNailLibraryCount) managerNailLibraryCount.textContent = `${items.length} mẫu`;
  if (nailGalleryKicker) nailGalleryKicker.textContent = manage ? 'THƯ VIỆN MẪU MÓNG' : 'MẪU MÓNG TẠI TIỆM';
  if (nailGalleryKickerText) nailGalleryKickerText.textContent = manage ? 'Quản lý cập nhật trực tiếp kho mẫu móng của tiệm' : 'Khách có thể xem trước để chọn nhanh hơn';
  if ($('nailGalleryTitle')) $('nailGalleryTitle').textContent = manage ? 'Quản lý thư viện mẫu móng' : 'Mẫu móng hiện có tại tiệm';
  if (nailGallerySubtitle) nailGallerySubtitle.textContent = manage ? 'Bạn có thể thêm mẫu mới hoặc xóa những mẫu tiệm không còn sử dụng. Mọi thay đổi sẽ tự đồng bộ sang tài khoản Khách hàng.' : 'Khách hàng có thể xem trước các mẫu móng để đỡ mất thời gian đến tiệm mới ngồi tìm và chọn mẫu.';
  bindNailGalleryCards();
}
function readNailLibraryImageFile() {
  return new Promise(resolve => {
    const file = managerNailImage?.files?.[0];
    if (!file) return resolve('assets/nail-sample-1.png');
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || 'assets/nail-sample-1.png'));
    reader.onerror = () => resolve('assets/nail-sample-1.png');
    reader.readAsDataURL(file);
  });
}
async function addManagerNailSample() {
  if (getSession()?.role !== 'Quản lý') return;
  const code = managerNailCode?.value.trim() || '';
  const name = managerNailName?.value.trim() || '';
  const description = managerNailDescription?.value.trim() || '';
  if (!code || !name) { showToast('Vui lòng nhập mã mẫu và tên mẫu móng.'); return; }
  const image = await readNailLibraryImageFile();
  const items = nailSampleStore();
  items.push({ id:`nail-${Date.now()}`, code, name, description, image, createdAt:new Date().toISOString() });
  saveNailSampleStore(items);
  if (managerNailCode) managerNailCode.value='';
  if (managerNailName) managerNailName.value='';
  if (managerNailDescription) managerNailDescription.value='';
  if (managerNailImage) managerNailImage.value='';
  renderNailGallery();
  showToast(`Đã thêm ${code} — ${name} vào thư viện mẫu móng.`);
}

let nailGalleryMode = 'browse';
let editingAppointmentId = null;
let managerServiceMode = 'create';
let managerServiceEditingId = '';
let managerServiceDraftLock = { description:false, summary:false };

function normalizePhone(value='') { return value.replace(/\s|\.|-/g,''); }
function isValidPhone(value) { return /^(0\d{9}|\+84\d{9})$/.test(normalizePhone(value)); }
function accounts() { return JSON.parse(localStorage.getItem('beauty_accounts_v02') || '{}'); }
function saveAccounts(data) { localStorage.setItem('beauty_accounts_v02', JSON.stringify(data)); }
const DEMO_LOGIN_ACCOUNTS = {
  'Quản lý': { name:'Nguyễn Văn Chủ', phone:'0356166766', password:'N123456789@@' },
  'Nhân viên': { name:'Nguyễn Thị Nhung', phone:'0964369316', password:'Nhung123456789@@' },
  'Khách hàng': { name:'nguyễn thị thắm', phone:'0356166765', password:'N123456789@', gender:'Nữ' }
};
const DEMO_CUSTOMER_ACCOUNTS = [
  { name:'nguyễn thị thắm', phone:'0356166765', password:'N123456789@', gender:'Nữ' },
  { name:'nguyễn thị lành', phone:'0356166767', password:'N123456789#', gender:'Nữ' }
];
function allDemoAccounts() {
  return [
    { role:'Quản lý', ...DEMO_LOGIN_ACCOUNTS['Quản lý'] },
    { role:'Nhân viên', ...DEMO_LOGIN_ACCOUNTS['Nhân viên'] },
    ...DEMO_CUSTOMER_ACCOUNTS.map(item => ({ role:'Khách hàng', ...item }))
  ];
}
function ensureDemoAccounts() {
  const data = accounts();
  allDemoAccounts().forEach(demo => {
    const key = accountKey(demo.role, demo.phone);
    const previous = data[key] || {};
    data[key] = {
      ...previous,
      ...demo,
      role:demo.role,
      phone:normalizePhone(demo.phone),
      address:previous.address || demo.address || '',
      gender:previous.gender || demo.gender || '',
      demo:true,
      createdAt:previous.createdAt || new Date().toISOString()
    };
  });
  saveAccounts(data);
}
function demoAccountForRole(role=currentRole, phone='') {
  if (role === 'Khách hàng') {
    return DEMO_CUSTOMER_ACCOUNTS.find(item => normalizePhone(item.phone) === normalizePhone(phone)) || DEMO_CUSTOMER_ACCOUNTS[0];
  }
  return DEMO_LOGIN_ACCOUNTS[role] || null;
}
function prefillDemoLogin(role=currentRole, phone='') {
  const nameInput = $('loginName');
  const phoneInput = $('loginPhone');
  const passwordInput = $('loginPassword');
  if (!nameInput || !phoneInput || !passwordInput) return;
  const demo = demoAccountForRole(role, phone);
  nameInput.value = '';
  phoneInput.value = '';
  passwordInput.value = '';
  $('loginMessage').textContent = '';
  if (!demo) return;
  nameInput.value = demo.name;
  phoneInput.value = demo.phone;
  passwordInput.value = demo.password;
}
function renderDemoCustomerSwitcher() {
  const wrap = $('demoCustomerSwitcher');
  if (!wrap) return;
  const show = currentRole === 'Khách hàng';
  wrap.hidden = !show;
  if (!show) return;
  wrap.querySelectorAll('[data-demo-customer]').forEach(btn => {
    btn.classList.toggle('active', normalizePhone(btn.dataset.demoCustomer || '') === normalizePhone($('loginPhone')?.value || ''));
  });
}
function accountKey(role, phone) { return `${role}::${normalizePhone(phone)}`; }
const TAB_SESSION_KEY = 'beauty_session_tab_v28';
function getSession() {
  try { return JSON.parse(sessionStorage.getItem(TAB_SESSION_KEY) || 'null'); }
  catch { return null; }
}
function saveSession(session) {
  sessionStorage.setItem(TAB_SESSION_KEY, JSON.stringify(session));
  // Vision 28: không dùng localStorage cho phiên đăng nhập nữa để tránh 2 tab ghi đè vai trò của nhau.
  localStorage.removeItem('beauty_session_v03');
}
function clearSession() {
  sessionStorage.removeItem(TAB_SESSION_KEY);
  localStorage.removeItem('beauty_session_v03');
}
const NOTIFICATION_KEY = 'beauty_notifications_v29';
function notificationStore() {
  try { return JSON.parse(localStorage.getItem(NOTIFICATION_KEY) || '[]'); }
  catch { return []; }
}
function saveNotificationStore(items) { localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(items)); }
function notificationKeyForPhone(phone) { return normalizePhone(phone); }

const PROMOTION_CAMPAIGN_KEY = 'beauty_promotion_campaigns_v36';
const PROMOTION_LIFETIME_MS = 48 * 60 * 60 * 1000;
function promotionCampaignStoreRaw() {
  try {
    const value = JSON.parse(localStorage.getItem(PROMOTION_CAMPAIGN_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}
function promotionExpiresAtValue(item={}) {
  const explicit = new Date(item.expiresAt || 0).getTime();
  if (Number.isFinite(explicit) && explicit > 0) return explicit;
  const created = new Date(item.sentAt || item.createdAt || 0).getTime();
  return Number.isFinite(created) && created > 0 ? created + PROMOTION_LIFETIME_MS : 0;
}
function isPromotionExpired(item={}, now=Date.now()) {
  const expires = promotionExpiresAtValue(item);
  return !!expires && now >= expires;
}
function savePromotionCampaignStore(items) {
  localStorage.setItem(PROMOTION_CAMPAIGN_KEY, JSON.stringify(Array.isArray(items) ? items : []));
}
function migratePromotionCampaignsFromNotifications() {
  const existing = promotionCampaignStoreRaw();
  const ids = new Set(existing.map(item => item.id));
  const groups = new Map();
  notificationStore().forEach(item => {
    if (item?.type !== 'promotion' || !item.campaignId || item.source !== 'manager-composer') return;
    const key = item.campaignId;
    if (!groups.has(key)) {
      groups.set(key, {
        id:key,
        type:'promotion',
        summary:item.title || 'Chương trình khuyến mại',
        content:item.content || item.message || '',
        sender:item.sender || salonProfile().name,
        sentAt:item.createdAt || new Date().toISOString(),
        expiresAt:new Date(new Date(item.createdAt || Date.now()).getTime() + PROMOTION_LIFETIME_MS).toISOString(),
        recipientPhones:[]
      });
    }
    const group = groups.get(key);
    const phone = normalizePhone(item.recipientPhone || '');
    if (phone && !group.recipientPhones.includes(phone)) group.recipientPhones.push(phone);
  });
  let changed=false;
  groups.forEach((campaign,id) => {
    if (!ids.has(id)) { existing.push(campaign); changed=true; }
  });
  if (changed) savePromotionCampaignStore(existing);
}
function promotionCampaignStore() {
  migratePromotionCampaignsFromNotifications();
  const now = Date.now();
  const current = promotionCampaignStoreRaw();
  const active = current.filter(item => !isPromotionExpired(item, now));
  if (active.length !== current.length) savePromotionCampaignStore(active);
  return active.sort((a,b) => new Date(b.sentAt || b.createdAt || 0) - new Date(a.sentAt || a.createdAt || 0));
}
function pruneExpiredPromotionNotifications() {
  const data = notificationStore();
  const next = data.filter(item => !(item?.type === 'promotion' && isPromotionExpired(item)));
  if (next.length !== data.length) saveNotificationStore(next);
  return next;
}
function escapeUiText(value='') {
  return String(value ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}
function formatPromotionMoment(value) {
  const date = new Date(value || 0);
  if (Number.isNaN(date.getTime())) return '—';
  try { return new Intl.DateTimeFormat('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(date); }
  catch { return date.toLocaleString(); }
}

const SALON_PROFILE_KEY = 'beauty_salon_profile_v05';
const APPOINTMENTS_KEY = 'beauty_appointments_v29';
const BOOKING_WRITE_LOCK_KEY = 'beauty_booking_write_lock_v56';
function acquireBookingWriteLock() {
  const now = Date.now();
  try {
    const current = JSON.parse(localStorage.getItem(BOOKING_WRITE_LOCK_KEY) || 'null');
    if (current?.expiresAt && Number(current.expiresAt) > now) return '';
  } catch {}
  const token = `lock-${now}-${Math.random().toString(36).slice(2)}`;
  localStorage.setItem(BOOKING_WRITE_LOCK_KEY, JSON.stringify({token,expiresAt:now+3000}));
  try {
    const check = JSON.parse(localStorage.getItem(BOOKING_WRITE_LOCK_KEY) || 'null');
    return check?.token === token ? token : '';
  } catch { return ''; }
}
function releaseBookingWriteLock(token='') {
  if (!token) return;
  try {
    const current = JSON.parse(localStorage.getItem(BOOKING_WRITE_LOCK_KEY) || 'null');
    if (current?.token === token) localStorage.removeItem(BOOKING_WRITE_LOCK_KEY);
  } catch {}
}
function appointmentStore() {
  try { return JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) || '[]'); }
  catch { return []; }
}
function saveAppointmentStore(items) { localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(items)); }
const REVENUE_ARCHIVE_KEY = 'beauty_revenue_month_archive_v44';
function revenueArchiveStore() {
  try {
    const value = JSON.parse(localStorage.getItem(REVENUE_ARCHIVE_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}
function saveRevenueArchiveStore(items) { localStorage.setItem(REVENUE_ARCHIVE_KEY, JSON.stringify(Array.isArray(items) ? items : [])); }
const REVENUE_YEAR_ARCHIVE_KEY = 'beauty_revenue_year_archive_v46';
function revenueYearArchiveStore() {
  try {
    const value = JSON.parse(localStorage.getItem(REVENUE_YEAR_ARCHIVE_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}
function saveRevenueYearArchiveStore(items) { localStorage.setItem(REVENUE_YEAR_ARCHIVE_KEY, JSON.stringify(Array.isArray(items) ? items : [])); }
function revenueParseMoney(value='') {
  if (typeof value === 'number' && Number.isFinite(value)) return Math.round(value);
  const digits = String(value ?? '').replace(/[^0-9-]/g,'');
  const parsed = Number(digits || 0);
  return Number.isFinite(parsed) ? Math.max(0, Math.round(parsed)) : 0;
}
function revenueFormatMoney(value=0) {
  const amount = Number(value || 0);
  return `${Math.round(amount).toLocaleString('vi-VN')}đ`;
}

const EXPENSE_STORE_KEY = 'beauty_expenses_v47';
const PROFIT_YEAR_ARCHIVE_KEY = 'beauty_profit_year_archive_v47';
const SERVICE_CODE_STORE_KEY = 'beauty_service_codes_v48';
const EXPENSE_FIXED_CATEGORIES = ['Điện nước','Mặt bằng','Marketing','Sửa chữa','Lương / nhân sự','Chi phí khác'];
const EXPENSE_PAYMENTS = ['Tiền mặt','Chuyển khoản','Khác'];
let expenseFilterKey = 'all';
function serviceCodeStore() {
  try {
    const value=JSON.parse(localStorage.getItem(SERVICE_CODE_STORE_KEY)||'{}');
    return value && typeof value==='object' ? value : {};
  } catch { return {}; }
}
function saveServiceCodeStore(value) { localStorage.setItem(SERVICE_CODE_STORE_KEY,JSON.stringify(value||{})); }
function ensureServiceCodes() {
  const map=serviceCodeStore();
  const defaults={'nail-care':'01','goi-duong-sinh':'02','beauty-relax':'03'};
  Object.entries(defaults).forEach(([id,code])=>{ if(!map[id]) map[id]=code; });
  let max=Object.values(map).reduce((m,code)=>Math.max(m,parseInt(String(code),10)||0),0);
  serviceCatalogStoreRaw().forEach(item=>{
    if(!item?.id || map[item.id]) return;
    max+=1;
    map[item.id]=String(max).padStart(2,'0');
  });
  saveServiceCodeStore(map);
  return map;
}
function serviceExpenseCategoryItems() {
  const codes=ensureServiceCodes();
  const ids=[...DEFAULT_SERVICE_IDS,...serviceCatalogStoreRaw().map(item=>item?.id).filter(Boolean)];
  const seen=new Set();
  return ids.filter(id=>{
    if(!id || seen.has(id) || isServiceDeleted(id) || !SERVICE_DATA[id]) return false;
    seen.add(id); return true;
  }).map(id=>({
    key:`material:${id}`,
    label:`Vật tư DV (${codes[id] || '--'}) – ${SERVICE_DATA[id]?.title || id}`,
    serviceId:id
  }));
}
function expenseCurrentCategoryItems() {
  return [
    {key:'material:common',label:'Vật tư chung'},
    ...serviceExpenseCategoryItems(),
    ...EXPENSE_FIXED_CATEGORIES.map(label=>({key:`fixed:${label}`,label}))
  ];
}
function expenseLegacyCategoryKey(label='') {
  const value=String(label||'').trim();
  if (!value || value==='Vật tư' || value==='Thiết bị' || value==='Vật tư chung') return 'material:common';
  const dynamic=serviceExpenseCategoryItems().find(item=>item.label===value);
  if(dynamic) return dynamic.key;
  if(EXPENSE_FIXED_CATEGORIES.includes(value)) return `fixed:${value}`;
  if(/^Vật tư DV \(/i.test(value)) return `legacy:${value}`;
  return `fixed:${value}`;
}
function expenseCategoryLabelForKey(key='', fallback='') {
  const current=expenseCurrentCategoryItems().find(item=>item.key===key);
  return current?.label || String(fallback||'').trim() || (key==='material:common'?'Vật tư chung':key.replace(/^fixed:/,''));
}
function expenseStore() {
  try {
    const value = JSON.parse(localStorage.getItem(EXPENSE_STORE_KEY) || '[]');
    return Array.isArray(value) ? value.map((item,index)=>expenseNormalize(item,index)) : [];
  } catch { return []; }
}
function expenseNormalize(item={}, index=0) {
  const quantity = Math.max(0, Number(item.quantity) || 0);
  const unitPrice = revenueParseMoney(item.unitPrice || 0);
  const legacyLabel=String(item.categoryLabel || item.category || '').trim();
  const categoryKey=String(item.categoryKey || expenseLegacyCategoryKey(legacyLabel));
  const categoryLabel=expenseCategoryLabelForKey(categoryKey,legacyLabel);
  return {
    id: String(item.id || `expense-${Date.now()}-${index}`),
    date: String(item.date || ''),
    categoryKey,
    categoryLabel,
    category: categoryLabel,
    item: String(item.item || ''),
    quantity,
    unit: String(item.unit || ''),
    unitPrice,
    total: Math.round(quantity * unitPrice),
    payment: String(item.payment || 'Chuyển khoản'),
    note: String(item.note || ''),
    createdAt: String(item.createdAt || new Date().toISOString()),
    updatedAt: String(item.updatedAt || item.createdAt || new Date().toISOString())
  };
}
function saveExpenseStore(items) {
  localStorage.setItem(EXPENSE_STORE_KEY, JSON.stringify((Array.isArray(items) ? items : []).map(expenseNormalize)));
}
function profitArchiveStore() {
  try {
    const value = JSON.parse(localStorage.getItem(PROFIT_YEAR_ARCHIVE_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}
function saveProfitArchiveStore(items) { localStorage.setItem(PROFIT_YEAR_ARCHIVE_KEY, JSON.stringify(Array.isArray(items) ? items : [])); }
function expenseDateValue(value='') {
  const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2])-1, Number(match[3]), 12, 0, 0, 0);
  return Number.isNaN(date.getTime()) ? null : date;
}
function expenseAmountForRange(startDate, endDate) {
  const startMs=startDate.getTime(), endMs=endDate.getTime();
  return expenseStore().reduce((sum,item)=>{
    const date=expenseDateValue(item.date);
    if (!date) return sum;
    const ms=date.getTime();
    return ms>=startMs && ms<endMs ? sum + Number(item.total || 0) : sum;
  },0);
}
function expenseCurrentYearTotal(year=new Date().getFullYear()) {
  return expenseAmountForRange(new Date(year,0,1),new Date(year+1,0,1));
}
function expenseHistoricalCategoryItems(items=expenseStore()) {
  const currentKeys=new Set(expenseCurrentCategoryItems().map(item=>item.key));
  const result=[]; const seen=new Set();
  items.forEach(item=>{
    if(!item?.categoryKey || currentKeys.has(item.categoryKey) || seen.has(item.categoryKey)) return;
    seen.add(item.categoryKey);
    result.push({key:item.categoryKey,label:item.categoryLabel || item.category || 'Nhóm chi phí cũ',historical:true});
  });
  return result;
}
function expenseAllFilterCategoryItems() {
  return [...expenseCurrentCategoryItems(),...expenseHistoricalCategoryItems()];
}
function expenseCategoryOptions(selectedKey='material:common', selectedLabel='') {
  const current=expenseCurrentCategoryItems();
  const options=[...current];
  if(selectedKey && !options.some(item=>item.key===selectedKey)) {
    options.push({key:selectedKey,label:selectedLabel || expenseCategoryLabelForKey(selectedKey,selectedLabel),historical:true});
  }
  return options.map(item=>`<option value="${escapeUiText(item.key)}"${item.key===selectedKey?' selected':''}>${escapeUiText(item.label)}${item.historical?' (lịch sử)':''}</option>`).join('');
}
function expenseRefreshFilterOptions() {
  if(!expenseFilterCategory) return;
  const allItems=expenseAllFilterCategoryItems();
  const previous=expenseFilterKey || expenseFilterCategory.value || 'all';
  expenseFilterCategory.innerHTML=`<option value="all">Tất cả nhóm chi phí</option>` + allItems.map(item=>`<option value="${escapeUiText(item.key)}">${escapeUiText(item.label)}${item.historical?' (lịch sử)':''}</option>`).join('');
  expenseFilterKey = previous==='all' || allItems.some(item=>item.key===previous) ? previous : 'all';
  expenseFilterCategory.value=expenseFilterKey;
}
function expensePaymentOptions(selected='Chuyển khoản') {
  return EXPENSE_PAYMENTS.map(item=>`<option value="${escapeUiText(item)}"${item===selected?' selected':''}>${escapeUiText(item)}</option>`).join('');
}
function expenseRowHtml(item, index, draft=false, draftCategoryKey='material:common') {
  const row=item || {id:'draft',date:'',categoryKey:draftCategoryKey,categoryLabel:expenseCategoryLabelForKey(draftCategoryKey),item:'',quantity:'',unit:'',unitPrice:'',total:0,payment:'Chuyển khoản',note:''};
  const rowId=draft?'draft':row.id;
  const amount = draft ? (Number(row.quantity||0) * revenueParseMoney(row.unitPrice||0)) : Number(row.total||0);
  return `<tr data-expense-row="${escapeUiText(rowId)}"${draft?' data-expense-draft="1"':''}>
    <td class="expense-stt">${index+1}</td>
    <td><input data-expense-field="date" type="date" value="${escapeUiText(row.date||'')}"></td>
    <td><select data-expense-field="categoryKey">${expenseCategoryOptions(row.categoryKey||'material:common',row.categoryLabel||row.category||'')}</select></td>
    <td><input data-expense-field="item" type="text" value="${escapeUiText(row.item||'')}" placeholder="Tên vật tư / khoản chi"></td>
    <td><input data-expense-field="quantity" type="number" min="0" step="0.01" value="${row.quantity!==''?escapeUiText(row.quantity):''}" placeholder="0"></td>
    <td><input data-expense-field="unit" type="text" value="${escapeUiText(row.unit||'')}" placeholder="chai, bộ..."></td>
    <td><input data-expense-field="unitPrice" inputmode="numeric" type="text" value="${row.unitPrice!=='' && row.unitPrice!==0 ? escapeUiText(row.unitPrice) : ''}" placeholder="0"></td>
    <td class="expense-total" data-expense-total>${amount ? revenueFormatMoney(amount) : '—'}</td>
    <td><select data-expense-field="payment">${expensePaymentOptions(row.payment||'Chuyển khoản')}</select></td>
    <td><input data-expense-field="note" type="text" value="${escapeUiText(row.note||'')}" placeholder="Ghi chú"></td>
    <td>${draft?'<span class="expense-draft-mark">Mới</span>':`<button class="expense-delete-btn" type="button" data-expense-delete="${escapeUiText(row.id)}">Xóa</button>`}</td>
  </tr>`;
}
function expenseRenderTable() {
  if (!expenseTableBody) return;
  ensureServiceCodes();
  expenseRefreshFilterOptions();
  const items=expenseStore();
  const filtered=expenseFilterKey==='all' ? items : items.filter(item=>item.categoryKey===expenseFilterKey);
  const currentCategoryKeys=new Set(expenseCurrentCategoryItems().map(item=>item.key));
  const draftCategoryKey=expenseFilterKey!=='all' && currentCategoryKeys.has(expenseFilterKey) ? expenseFilterKey : 'material:common';
  expenseTableBody.innerHTML=filtered.map((item,index)=>expenseRowHtml(item,index,false)).join('') + expenseRowHtml(null,filtered.length,true,draftCategoryKey);
  const year=new Date().getFullYear();
  const total=expenseCurrentYearTotal(year);
  const month=new Date().getMonth();
  const monthTotal=expenseAmountForRange(new Date(year,month,1),new Date(year,month+1,1));
  const filteredTotal=filtered.reduce((sum,item)=>sum+Number(item.total||0),0);
  const selectedLabel=expenseFilterKey==='all'?'Tất cả nhóm chi phí':expenseAllFilterCategoryItems().find(item=>item.key===expenseFilterKey)?.label || 'Nhóm chi phí đã chọn';
  if (expenseFilterStatus) expenseFilterStatus.innerHTML=`
    <span class="expense-filter-pill">Đang xem: <b>${escapeUiText(selectedLabel)}</b></span>
    <span class="expense-filter-pill">Số khoản: <b>${filtered.length}</b></span>
    <span class="expense-filter-pill">Tổng kết quả đang lọc: <b>${revenueFormatMoney(filteredTotal)}</b></span>`;
  if (expenseSummary) expenseSummary.innerHTML=`
    <span class="revenue-summary-chip">Năm: <b>${year}</b></span>
    <span class="revenue-summary-chip">Tổng khoản chi đã lưu: <b>${items.length}</b></span>
    <span class="revenue-summary-chip">Chi tháng ${month+1}: <b>${revenueFormatMoney(monthTotal)}</b></span>
    <span class="revenue-summary-chip">Chi từ đầu năm: <b>${revenueFormatMoney(total)}</b></span>`;
}
function expenseRowPayload(tr) {
  const get=(field)=>tr.querySelector(`[data-expense-field="${field}"]`)?.value ?? '';
  const categoryKey=get('categoryKey')||'material:common';
  const categorySelect=tr.querySelector('[data-expense-field="categoryKey"]');
  const categoryLabel=categorySelect?.selectedOptions?.[0]?.textContent?.replace(/ \(lịch sử\)$/,'').trim() || expenseCategoryLabelForKey(categoryKey);
  return {
    date:get('date'), categoryKey, categoryLabel, category:categoryLabel, item:get('item').trim(),
    quantity:Math.max(0,Number(get('quantity'))||0), unit:get('unit').trim(), unitPrice:revenueParseMoney(get('unitPrice')),
    payment:get('payment')||'Chuyển khoản', note:get('note').trim()
  };
}
function expenseDraftComplete(payload) {
  return Boolean(payload.date && payload.item && payload.quantity>0 && payload.unit && payload.unitPrice>0);
}
function expenseRefreshRowTotal(tr) {
  if (!tr) return;
  const payload=expenseRowPayload(tr);
  const total=payload.quantity * payload.unitPrice;
  const cell=tr.querySelector('[data-expense-total]');
  if (cell) cell.textContent=total ? revenueFormatMoney(total) : '—';
}
function expenseSaveExistingRow(tr) {
  const id=tr?.dataset.expenseRow || '';
  if (!id || id==='draft') return;
  const items=expenseStore();
  const index=items.findIndex(item=>item.id===id);
  if (index<0) return;
  items[index]={...items[index],...expenseRowPayload(tr),updatedAt:new Date().toISOString()};
  saveExpenseStore(items);
  expenseRenderDashboard();
}
function expenseCreateFromDraft(tr) {
  const payload=expenseRowPayload(tr);
  if (!expenseDraftComplete(payload)) return false;
  const items=expenseStore();
  items.push(expenseNormalize({...payload,id:`expense-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,createdAt:new Date().toISOString()}));
  saveExpenseStore(items);
  expenseRenderDashboard();
  showToast('Đã lưu khoản chi và tự tạo thêm một dòng mới.');
  return true;
}
function expenseDelete(id) {
  if (!id) return;
  const items=expenseStore();
  const target=items.find(item=>item.id===id);
  if (!target) return;
  if (!window.confirm(`Xóa khoản chi “${target.item || 'này'}”?`)) return;
  saveExpenseStore(items.filter(item=>item.id!==id));
  expenseRenderDashboard();
  showToast('Đã xóa khoản chi.');
}
function profitMonthRows(year) {
  const rows=[];
  for (let month=0; month<12; month+=1) {
    const start=new Date(year,month,1), end=new Date(year,month+1,1);
    const revenue=revenueAggregateForRange(start,end,revenueServiceCatalog()).grandTotal;
    const expense=expenseAmountForRange(start,end);
    rows.push({month,revenue,expense,profit:revenue-expense});
  }
  return rows;
}
function profitMonthlyTableHtml(year) {
  const rows=profitMonthRows(year);
  const totals=rows.reduce((acc,row)=>({revenue:acc.revenue+row.revenue,expense:acc.expense+row.expense,profit:acc.profit+row.profit}),{revenue:0,expense:0,profit:0});
  const money=(value)=>value ? revenueFormatMoney(value) : '—';
  const profitMoney=(value)=>value===0?'—':`${value<0?'−':''}${revenueFormatMoney(Math.abs(value))}`;
  const note=(row)=>row.revenue===0&&row.expense===0?'Chưa phát sinh':row.profit>0?'Có lãi':row.profit<0?'Đang lỗ':'Hòa vốn';
  return `<table class="revenue-table profit-month-table">
    <thead><tr><th class="revenue-stt-col">STT</th><th class="revenue-period-col">THÁNG / NĂM</th><th>DOANH THU</th><th>CHI PHÍ</th><th>LỢI NHUẬN TẠM TÍNH</th><th>GHI CHÚ</th></tr></thead>
    <tbody>${rows.map((row,index)=>`<tr><td class="revenue-stt-col">${index+1}</td><td class="revenue-period-col">Tháng ${row.month+1}/${year}</td><td>${money(row.revenue)}</td><td>${money(row.expense)}</td><td class="${row.profit<0?'profit-negative':'profit-positive'}">${profitMoney(row.profit)}</td><td class="profit-note">${note(row)}</td></tr>`).join('')}</tbody>
    <tfoot><tr><td colspan="2">TỔNG CỘNG</td><td>${revenueFormatMoney(totals.revenue)}</td><td>${revenueFormatMoney(totals.expense)}</td><td class="${totals.profit<0?'profit-negative':'profit-positive'}">${profitMoney(totals.profit)}</td><td>Lợi nhuận tạm tính</td></tr></tfoot>
  </table>`;
}
function profitCompactMoney(value=0) {
  const abs=Math.abs(Number(value)||0);
  if (abs>=1e9) return `${(value/1e9).toFixed(abs>=1e10?0:1)} tỷ`;
  if (abs>=1e6) return `${(value/1e6).toFixed(abs>=1e7?0:1)} tr`;
  if (abs>=1e3) return `${(value/1e3).toFixed(abs>=1e4?0:1)}k`;
  return `${Math.round(value)}`;
}
function profitChartSvg(year, rows=profitMonthRows(year)) {
  const width=1120,height=430,left=80,right=30,top=34,bottom=64;
  const plotW=width-left-right,plotH=height-top-bottom;
  const values=rows.flatMap(row=>[row.revenue,row.expense,row.profit]);
  let min=Math.min(0,...values), max=Math.max(0,...values);
  if (max===min) max=min+1;
  const pad=(max-min)*0.12 || 1; max+=pad; if(min<0) min-=pad;
  const y=(value)=>top + (max-value)/(max-min)*plotH;
  const x=(index)=>left + (index/(rows.length-1))*plotW;
  const grid=[];
  for(let i=0;i<=5;i+=1){const value=max-(max-min)*(i/5),yy=y(value);grid.push(`<line x1="${left}" y1="${yy.toFixed(1)}" x2="${width-right}" y2="${yy.toFixed(1)}" class="profit-grid-line"/><text x="${left-12}" y="${(yy+4).toFixed(1)}" text-anchor="end" class="profit-axis-label">${escapeUiText(profitCompactMoney(value))}</text>`);}
  const series=[
    {key:'revenue',label:'Doanh thu',cls:'profit-series-revenue'},
    {key:'expense',label:'Chi phí',cls:'profit-series-expense'},
    {key:'profit',label:'Lợi nhuận',cls:'profit-series-profit'}
  ];
  const lines=series.map(seriesItem=>{
    const pts=rows.map((row,index)=>`${x(index).toFixed(1)},${y(row[seriesItem.key]).toFixed(1)}`).join(' ');
    const dots=rows.map((row,index)=>`<circle cx="${x(index).toFixed(1)}" cy="${y(row[seriesItem.key]).toFixed(1)}" r="4.5" class="${seriesItem.cls}"><title>Tháng ${row.month+1}: ${seriesItem.label} ${revenueFormatMoney(row[seriesItem.key])}</title></circle>`).join('');
    return `<polyline points="${pts}" class="profit-chart-line ${seriesItem.cls}"/>${dots}`;
  }).join('');
  const labels=rows.map((row,index)=>`<text x="${x(index).toFixed(1)}" y="${height-28}" text-anchor="middle" class="profit-month-label">T${row.month+1}</text>`).join('');
  const zeroY=y(0);
  return `<svg viewBox="0 0 ${width} ${height}" class="profit-chart-svg" role="img" aria-label="Biểu đồ doanh thu chi phí lợi nhuận năm ${year}">
    ${grid.join('')}<line x1="${left}" y1="${zeroY.toFixed(1)}" x2="${width-right}" y2="${zeroY.toFixed(1)}" class="profit-zero-line"/>
    ${lines}${labels}
    <g class="profit-chart-legend" transform="translate(${left},12)">
      <circle cx="0" cy="0" r="5" class="profit-series-revenue"/><text x="12" y="4">Doanh thu</text>
      <circle cx="110" cy="0" r="5" class="profit-series-expense"/><text x="122" y="4">Chi phí</text>
      <circle cx="205" cy="0" r="5" class="profit-series-profit"/><text x="217" y="4">Lợi nhuận</text>
    </g>
  </svg>`;
}
function profitDataYears() {
  const now=new Date();
  const years=[now.getFullYear()];
  revenueCompletedAppointments().forEach(item=>{const date=revenueLocalDate(item.startAt); if(date) years.push(date.getFullYear());});
  expenseStore().forEach(item=>{const date=expenseDateValue(item.date); if(date) years.push(date.getFullYear());});
  const min=Math.min(...years), max=Math.max(...years);
  const result=[]; for(let year=min;year<=max;year+=1) result.push(year); return result;
}
function profitYearSnapshot(year) {
  const rows=profitMonthRows(year);
  const totals=rows.reduce((acc,row)=>({revenue:acc.revenue+row.revenue,expense:acc.expense+row.expense,profit:acc.profit+row.profit}),{revenue:0,expense:0,profit:0});
  return {key:String(year),year,label:`Năm ${year}`,rows,totals,refreshedAt:new Date().toISOString()};
}
function profitRefreshArchives() {
  const current=new Date().getFullYear();
  const archives=profitDataYears().filter(year=>year<current).map(year=>profitYearSnapshot(year)).sort((a,b)=>b.year-a.year);
  saveProfitArchiveStore(archives); return archives;
}
function profitRenderDashboard(renderExpenses=true) {
  const now=new Date(),year=now.getFullYear();
  if (renderExpenses) expenseRenderTable();
  const rows=profitMonthRows(year);
  if (profitMonthlyTitle) profitMonthlyTitle.textContent=`BẢNG THEO DÕI LỢI NHUẬN THEO THÁNG — ${year}`;
  if (profitMonthlyTableWrap) profitMonthlyTableWrap.innerHTML=profitMonthlyTableHtml(year);
  const totals=rows.reduce((acc,row)=>({revenue:acc.revenue+row.revenue,expense:acc.expense+row.expense,profit:acc.profit+row.profit}),{revenue:0,expense:0,profit:0});
  if (profitSummary) profitSummary.innerHTML=`<span class="revenue-summary-chip">Doanh thu năm: <b>${revenueFormatMoney(totals.revenue)}</b></span><span class="revenue-summary-chip">Chi phí năm: <b>${revenueFormatMoney(totals.expense)}</b></span><span class="revenue-summary-chip">Lợi nhuận tạm tính: <b>${totals.profit<0?'−':''}${revenueFormatMoney(Math.abs(totals.profit))}</b></span>`;
  if (profitChartTitle) profitChartTitle.textContent=`DOANH THU • CHI PHÍ • LỢI NHUẬN — ${year}`;
  if (profitChartWrap) profitChartWrap.innerHTML=profitChartSvg(year,rows);
  const best=rows.filter(row=>row.revenue||row.expense).sort((a,b)=>b.profit-a.profit)[0];
  if (profitChartMeta) profitChartMeta.innerHTML=`<span class="revenue-summary-chip">Năm theo dõi: <b>${year}</b></span><span class="revenue-summary-chip">Tổng lợi nhuận: <b>${totals.profit<0?'−':''}${revenueFormatMoney(Math.abs(totals.profit))}</b></span>${best?`<span class="revenue-summary-chip">Tháng lợi nhuận cao nhất: <b>Tháng ${best.month+1} • ${best.profit<0?'−':''}${revenueFormatMoney(Math.abs(best.profit))}</b></span>`:''}`;
  profitRefreshArchives();
}
function expenseRenderDashboard(renderExpenses=true) { profitRenderDashboard(renderExpenses); }
function profitArchiveCard(item) {
  return `<div class="revenue-archive-item"><div><strong>${escapeUiText(item.label)}</strong><small>Biểu đồ 12 tháng • Doanh thu − Chi phí</small></div><div class="revenue-archive-amount">${item.totals?.profit<0?'−':''}${revenueFormatMoney(Math.abs(item.totals?.profit||0))}</div><button class="revenue-archive-open" type="button" data-profit-archive-open="${item.year}">Mở</button></div>`;
}
function profitOpenArchive() {
  const archives=profitRefreshArchives();
  if (profitArchiveList) profitArchiveList.innerHTML=archives.length?archives.map(profitArchiveCard).join(''):'<div class="revenue-empty-state">Chưa có năm cũ để lưu trong thư mục.</div>';
  if (profitArchivePreview) profitArchivePreview.innerHTML='';
  profitArchiveList?.querySelectorAll('[data-profit-archive-open]').forEach(btn=>btn.addEventListener('click',()=>{
    const item=profitArchiveStore().find(row=>String(row.year)===String(btn.dataset.profitArchiveOpen));
    if (!item || !profitArchivePreview) return;
    profitArchivePreview.innerHTML=`<div class="profit-report-card"><h3>${escapeUiText(item.label)}</h3><p>Lợi nhuận tạm tính: <b>${item.totals?.profit<0?'−':''}${revenueFormatMoney(Math.abs(item.totals?.profit||0))}</b></p>${profitChartSvg(item.year,item.rows||[])}</div>`;
  }));
  profitArchiveBackdrop?.classList.add('open'); profitArchiveBackdrop?.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function profitCloseArchive() { profitArchiveBackdrop?.classList.remove('open'); profitArchiveBackdrop?.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
function profitOpenAll() {
  const years=profitDataYears();
  if (profitAllContent) profitAllContent.innerHTML=years.map(year=>{const item=profitYearSnapshot(year); return `<section class="profit-report-card"><div class="revenue-report-caption"><div><h3>Năm ${year}</h3><p>Doanh thu ${revenueFormatMoney(item.totals.revenue)} • Chi phí ${revenueFormatMoney(item.totals.expense)}</p></div><span>Lợi nhuận: ${item.totals.profit<0?'−':''}${revenueFormatMoney(Math.abs(item.totals.profit))}</span></div>${profitChartSvg(year,item.rows)}</section>`;}).join('');
  profitAllBackdrop?.classList.add('open'); profitAllBackdrop?.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function profitCloseAll() { profitAllBackdrop?.classList.remove('open'); profitAllBackdrop?.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
function profitPrintAll() {
  const html=profitAllContent?.innerHTML || profitDataYears().map(year=>`<section class="profit-report-card"><h3>Năm ${year}</h3>${profitChartSvg(year)}</section>`).join('');
  const popup=window.open('','_blank','width=1200,height=900'); if(!popup){showToast('Trình duyệt đang chặn cửa sổ in.');return;}
  popup.document.write(`<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Báo cáo lợi nhuận</title><style>body{font-family:Arial,sans-serif;color:#2d2327;padding:20px}.profit-report-card{page-break-after:always;margin-bottom:30px}.profit-report-card:last-child{page-break-after:auto}svg{width:100%;height:auto}.profit-chart-line{fill:none;stroke-width:3}.profit-series-revenue{stroke:#5b7db8;fill:#5b7db8}.profit-series-expense{stroke:#c48a4d;fill:#c48a4d}.profit-series-profit{stroke:#7a9d75;fill:#7a9d75}.profit-grid-line{stroke:#ddd}.profit-zero-line{stroke:#999;stroke-dasharray:5 5}.profit-axis-label,.profit-month-label{font-size:10px;fill:#555}</style></head><body><h1>BÁO CÁO LỢI NHUẬN 12 THÁNG</h1>${html}</body></html>`);
  popup.document.close(); setTimeout(()=>{popup.focus();popup.print();},250);
}
function revenueLocalDate(value) {
  const date = new Date(value || 0);
  return Number.isNaN(date.getTime()) ? null : date;
}
function revenueMonthKey(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}`;
}
function revenueMonthLabel(year, monthIndex) { return `Tháng ${monthIndex+1}/${year}`; }
function revenueDaysInMonth(year, monthIndex) { return new Date(year, monthIndex + 1, 0).getDate(); }
function revenueCompletedAppointments() {
  return appointmentStore().filter(item => {
    if (!item?.completed) return false;
    const start = revenueLocalDate(item.startAt);
    return Boolean(start);
  });
}
function revenueServiceCatalog(appointments = revenueCompletedAppointments()) {
  const result = [];
  const seen = new Set();
  const push = (id, label) => {
    const key = String(id || label || '').trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    result.push({ id:key, label:String(label || id || 'Dịch vụ').trim() || 'Dịch vụ' });
  };
  Object.entries(SERVICE_DATA || {}).forEach(([id, data]) => push(id, data?.title || id));
  appointments.forEach(item => push(item.serviceId || `history-${item.serviceName || 'service'}`, item.serviceName || SERVICE_DATA[item.serviceId]?.title || 'Dịch vụ'));
  return result;
}
function revenueAppointmentServiceKey(item) {
  if (item?.serviceId) return String(item.serviceId);
  return String(`history-${item?.serviceName || 'service'}`);
}
function revenueAggregateForRange(startDate, endDate, services = revenueServiceCatalog()) {
  const startMs = startDate.getTime();
  const endMs = endDate.getTime();
  const totals = Object.fromEntries(services.map(service => [service.id, 0]));
  let grandTotal = 0;
  revenueCompletedAppointments().forEach(item => {
    const date = revenueLocalDate(item.startAt);
    if (!date) return;
    const ms = date.getTime();
    if (ms < startMs || ms >= endMs) return;
    const key = revenueAppointmentServiceKey(item);
    if (!(key in totals)) totals[key] = 0;
    const amount = revenueParseMoney(item.price || SERVICE_DATA[item.serviceId]?.price || 0);
    totals[key] += amount;
    grandTotal += amount;
  });
  return { totals, grandTotal };
}
function revenueDailyRows(year, monthIndex, services = revenueServiceCatalog()) {
  const days = revenueDaysInMonth(year, monthIndex);
  const rows = [];
  for (let day=1; day<=days; day+=1) {
    const start = new Date(year, monthIndex, day, 0, 0, 0, 0);
    const end = new Date(year, monthIndex, day+1, 0, 0, 0, 0);
    const agg = revenueAggregateForRange(start, end, services);
    rows.push({ day, date:start, ...agg });
  }
  return rows;
}
function revenueMonthRows(year, services = revenueServiceCatalog()) {
  const rows=[];
  for (let month=0; month<12; month+=1) {
    const dailyRows = revenueDailyRows(year, month, services);
    const totals = Object.fromEntries(services.map(service => [service.id, 0]));
    dailyRows.forEach(dayRow => services.forEach(service => { totals[service.id] += Number(dayRow.totals?.[service.id] || 0); }));
    const grandTotal = Object.values(totals).reduce((sum,value)=>sum+Number(value||0),0);
    rows.push({month, totals, grandTotal});
  }
  return rows;
}
function revenueYearBounds() {
  const completed = revenueCompletedAppointments();
  const now = new Date();
  const years = completed.map(item => revenueLocalDate(item.startAt)?.getFullYear()).filter(Boolean);
  const minYear = years.length ? Math.min(...years, now.getFullYear()) : now.getFullYear();
  const maxYear = years.length ? Math.max(...years, now.getFullYear()) : now.getFullYear();
  return { minYear, maxYear };
}
function revenueYearRows(services = revenueServiceCatalog()) {
  const {minYear,maxYear}=revenueYearBounds();
  const rows=[];
  for (let year=minYear; year<=maxYear; year+=1) {
    const monthlyRows = revenueMonthRows(year, services);
    const totals = Object.fromEntries(services.map(service => [service.id, 0]));
    monthlyRows.forEach(monthRow => services.forEach(service => { totals[service.id] += Number(monthRow.totals?.[service.id] || 0); }));
    const grandTotal = Object.values(totals).reduce((sum,value)=>sum+Number(value||0),0);
    rows.push({year, totals, grandTotal});
  }
  return rows;
}
function revenueTableCell(amount) {
  return amount ? `<td>${revenueFormatMoney(amount)}</td>` : '<td class="revenue-zero">—</td>';
}
function revenueRenderTable({ firstHeader, rows, services, firstCell, footerLabel='TỔNG CỘNG' }) {
  const serviceTotals = Object.fromEntries(services.map(service => [service.id, 0]));
  let grand = 0;
  rows.forEach(row => {
    services.forEach(service => { serviceTotals[service.id] += Number(row.totals?.[service.id] || 0); });
    grand += Number(row.grandTotal || 0);
  });
  return `<table class="revenue-table">
    <thead><tr><th class="revenue-stt-col">STT</th><th class="revenue-period-col">${escapeUiText(firstHeader)}</th>${services.map(service => `<th>${escapeUiText(service.label)}</th>`).join('')}<th class="revenue-total-head">TỔNG</th></tr></thead>
    <tbody>${rows.map((row,index) => `<tr><td class="revenue-stt-col">${index+1}</td><td class="revenue-period-col">${firstCell(row,index)}</td>${services.map(service => revenueTableCell(Number(row.totals?.[service.id] || 0))).join('')}<td class="revenue-total-cell">${row.grandTotal ? revenueFormatMoney(row.grandTotal) : '—'}</td></tr>`).join('')}</tbody>
    <tfoot><tr><td colspan="2">${escapeUiText(footerLabel)}</td>${services.map(service => `<td>${serviceTotals[service.id] ? revenueFormatMoney(serviceTotals[service.id]) : '—'}</td>`).join('')}<td>${grand ? revenueFormatMoney(grand) : '0đ'}</td></tr></tfoot>
  </table>`;
}
function revenueDailyTableHtml(year, monthIndex, services = revenueServiceCatalog()) {
  const rows = revenueDailyRows(year, monthIndex, services);
  return revenueRenderTable({
    firstHeader:'NGÀY', rows, services,
    firstCell:(row) => `${String(row.day).padStart(2,'0')}/${String(monthIndex+1).padStart(2,'0')}<span class="revenue-day-weekday">${new Intl.DateTimeFormat('vi-VN',{weekday:'short'}).format(row.date)}</span>`
  });
}
function revenueMonthTableHtml(year, services = revenueServiceCatalog()) {
  const rows = revenueMonthRows(year, services);
  return revenueRenderTable({ firstHeader:'THÁNG', rows, services, firstCell:(row)=>`Tháng ${row.month+1}` });
}
function revenueYearTableHtml(services = revenueServiceCatalog()) {
  const rows = revenueYearRows(services);
  return revenueRenderTable({ firstHeader:'NĂM', rows, services, firstCell:(row)=>String(row.year) });
}
function revenueMonthSnapshot(year, monthIndex) {
  const services = revenueServiceCatalog();
  const rows = revenueDailyRows(year, monthIndex, services).map(row => ({
    day:row.day,
    totals:{...row.totals},
    grandTotal:row.grandTotal
  }));
  const total = rows.reduce((sum,row)=>sum+Number(row.grandTotal||0),0);
  return { key:`${year}-${String(monthIndex+1).padStart(2,'0')}`, year, month:monthIndex, label:revenueMonthLabel(year,monthIndex), services, rows, total, refreshedAt:new Date().toISOString() };
}
function revenueRefreshArchives() {
  const now=new Date();
  const previousMonth = new Date(now.getFullYear(), now.getMonth()-1, 1);
  const completedDates = revenueCompletedAppointments().map(item=>revenueLocalDate(item.startAt)).filter(Boolean);
  let start = completedDates.length ? new Date(Math.min(...completedDates.map(date=>date.getTime()))) : previousMonth;
  start = new Date(start.getFullYear(), start.getMonth(), 1);
  if (start > previousMonth) start = previousMonth;
  const archives=[];
  for (let cursor=new Date(start); cursor<=previousMonth; cursor=new Date(cursor.getFullYear(),cursor.getMonth()+1,1)) {
    archives.push(revenueMonthSnapshot(cursor.getFullYear(),cursor.getMonth()));
  }
  const filtered=archives.sort((a,b)=>b.key.localeCompare(a.key));
  saveRevenueArchiveStore(filtered);
  return filtered;
}
function revenueYearSummarySnapshot(year) {
  const services = revenueServiceCatalog();
  const rows = revenueMonthRows(year, services).map(row => ({
    month: row.month,
    totals: {...row.totals},
    grandTotal: row.grandTotal
  }));
  const total = rows.reduce((sum,row)=>sum+Number(row.grandTotal||0),0);
  return { key:String(year), year, label:`Năm ${year}`, services, rows, total, refreshedAt:new Date().toISOString() };
}
function revenueRefreshYearArchives() {
  const now = new Date();
  const previousYear = now.getFullYear() - 1;
  const { minYear } = revenueYearBounds();
  const archives=[];
  for (let year=minYear; year<=previousYear; year+=1) archives.push(revenueYearSummarySnapshot(year));
  const filtered=archives.sort((a,b)=>b.year-a.year);
  saveRevenueYearArchiveStore(filtered);
  return filtered;
}
function revenueYearSnapshotTableHtml(snapshot) {
  const services=snapshot.services||[];
  const rows=(snapshot.rows||[]).map(row=>({month:Number(row.month||0),totals:row.totals||{},grandTotal:Number(row.grandTotal||0)}));
  return revenueRenderTable({ firstHeader:'THÁNG', rows, services, firstCell:(row)=>`Tháng ${row.month+1}` });
}
function revenueOpenMonthlyArchive() {
  const archives=revenueRefreshYearArchives();
  if (revenueMonthlyArchiveList) revenueMonthlyArchiveList.innerHTML=archives.length ? archives.map(item=>`<div class="revenue-archive-item">
    <div><strong>${escapeUiText(item.label)}</strong><small>12 tháng • tổng hợp từ doanh thu ngày</small></div>
    <div class="revenue-archive-amount">${revenueFormatMoney(item.total)}</div>
    <button class="revenue-archive-open" type="button" data-revenue-year-archive-open="${item.year}">Mở</button>
  </div>`).join('') : '<div class="revenue-empty-state">Chưa có năm cũ để lưu trong thư mục.</div>';
  revenueMonthlyArchiveList?.querySelectorAll('[data-revenue-year-archive-open]').forEach(btn=>btn.addEventListener('click',()=>revenueOpenMonthlyArchiveDetail(Number(btn.dataset.revenueYearArchiveOpen))));
  revenueMonthlyArchiveBackdrop?.classList.add('open');
  revenueMonthlyArchiveBackdrop?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function revenueCloseMonthlyArchive() {
  revenueMonthlyArchiveBackdrop?.classList.remove('open');
  revenueMonthlyArchiveBackdrop?.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function revenueOpenMonthlyArchiveDetail(year) {
  const item=revenueYearArchiveStore().find(entry=>Number(entry.year)===Number(year)) || revenueYearSummarySnapshot(Number(year));
  if (!item) return;
  if (revenueMonthlyArchiveDetailLabel) revenueMonthlyArchiveDetailLabel.textContent=`Năm ${item.year}`;
  if (revenueMonthlyArchiveDetailContent) revenueMonthlyArchiveDetailContent.innerHTML=`<div class="revenue-pdf-page"><div class="revenue-report-caption"><div><h3>Năm ${item.year}</h3><p>Tổng hợp doanh thu 12 tháng các dịch vụ</p></div><span>Tổng: ${revenueFormatMoney(item.total)}</span></div><div class="revenue-table-wrap">${revenueYearSnapshotTableHtml(item)}</div></div>`;
  revenueMonthlyArchiveDetailBackdrop?.classList.add('open');
  revenueMonthlyArchiveDetailBackdrop?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function revenueCloseMonthlyArchiveDetail() {
  revenueMonthlyArchiveDetailBackdrop?.classList.remove('open');
  revenueMonthlyArchiveDetailBackdrop?.setAttribute('aria-hidden','true');
  document.body.style.overflow=revenueMonthlyArchiveBackdrop?.classList.contains('open')?'hidden':'';
}
function revenueReportYears() {
  const {minYear,maxYear}=revenueYearBounds();
  const years=[];
  for (let year=minYear; year<=maxYear; year+=1) years.push(year);
  return years;
}
function revenueMonthlyReportPageHtml(year) {
  const services=revenueServiceCatalog();
  const rows=revenueMonthRows(year,services);
  const total=rows.reduce((sum,row)=>sum+Number(row.grandTotal||0),0);
  return `<section class="revenue-pdf-page"><div class="revenue-report-caption"><div><h3>Năm ${year}</h3><p>Tổng hợp doanh thu theo 12 tháng</p></div><span>Tổng: ${revenueFormatMoney(total)}</span></div><div class="revenue-table-wrap">${revenueRenderTable({firstHeader:'THÁNG',rows,services,firstCell:(row)=>`Tháng ${row.month+1}`})}</div></section>`;
}
function revenueOpenMonthlyAll() {
  const years=revenueReportYears();
  if (revenueMonthlyAllContent) revenueMonthlyAllContent.innerHTML=years.map(revenueMonthlyReportPageHtml).join('') || '<div class="revenue-empty-state">Chưa có dữ liệu doanh thu.</div>';
  revenueMonthlyAllBackdrop?.classList.add('open');
  revenueMonthlyAllBackdrop?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function revenueCloseMonthlyAll() {
  revenueMonthlyAllBackdrop?.classList.remove('open');
  revenueMonthlyAllBackdrop?.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function revenuePrintMonthlyAll() {
  const reportHtml=(revenueMonthlyAllContent?.innerHTML || revenueReportYears().map(revenueMonthlyReportPageHtml).join(''));
  const popup=window.open('','_blank','width=1200,height=900');
  if (!popup) { showToast('Trình duyệt đang chặn cửa sổ in. Hãy cho phép popup rồi thử lại.'); return; }
  popup.document.write(`<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Báo cáo doanh thu tháng Beauty Moment</title><style>body{font-family:Arial,sans-serif;color:#2d2327;padding:20px}.revenue-pdf-page{page-break-after:always;margin-bottom:28px}.revenue-pdf-page:last-child{page-break-after:auto}h3{margin:0 0 5px}.revenue-report-caption{display:flex;justify-content:space-between;gap:16px;margin-bottom:12px}table{border-collapse:collapse;width:100%;font-size:10px}th,td{border:1px solid #bbb;padding:5px;text-align:right}th:first-child,td:first-child{text-align:center}th{background:#dcebc9;color:#7b460f}.revenue-zero{color:#999}.revenue-total-cell,tfoot td{font-weight:bold}@media print{body{padding:0}}</style></head><body><h1>BÁO CÁO TỔNG HỢP DOANH THU THÁNG</h1>${reportHtml}</body></html>`);
  popup.document.close();
  setTimeout(()=>{popup.focus();popup.print();},250);
}
function serviceUsageCompletedAppointments() {
  return appointmentStore().filter(item => {
    if (!item?.completed) return false;
    return Boolean(revenueLocalDate(item.startAt));
  });
}
function serviceUsageMonthRows(year, services = revenueServiceCatalog()) {
  const rows=[];
  const completed=serviceUsageCompletedAppointments();
  for (let month=0; month<12; month+=1) {
    const totals=Object.fromEntries(services.map(service=>[service.id,0]));
    completed.forEach(item=>{
      const date=revenueLocalDate(item.startAt);
      if (!date || date.getFullYear()!==year || date.getMonth()!==month) return;
      const key=revenueAppointmentServiceKey(item);
      if (!(key in totals)) totals[key]=0;
      totals[key]+=1;
    });
    const totalUses=Object.values(totals).reduce((sum,value)=>sum+Number(value||0),0);
    let maxUses=0;
    services.forEach(service=>{ maxUses=Math.max(maxUses,Number(totals[service.id]||0)); });
    const leaders=maxUses>0 ? services.filter(service=>Number(totals[service.id]||0)===maxUses).map(service=>service.label) : [];
    rows.push({month,totals,totalUses,maxUses,leaders});
  }
  return rows;
}
function serviceUsageCell(value) {
  const count=Number(value||0);
  return count ? `<td class="service-usage-count">${count}</td>` : '<td class="revenue-zero">—</td>';
}
function serviceUsageTableHtml(year, services = revenueServiceCatalog()) {
  const rows=serviceUsageMonthRows(year,services);
  const serviceTotals=Object.fromEntries(services.map(service=>[service.id,0]));
  let totalAll=0;
  rows.forEach(row=>{
    totalAll+=row.totalUses;
    services.forEach(service=>{ serviceTotals[service.id]+=Number(row.totals?.[service.id]||0); });
  });
  return `<table class="revenue-table service-usage-table">
    <thead><tr><th class="revenue-stt-col">STT</th><th class="revenue-period-col">THÁNG</th>${services.map(service=>`<th>${escapeUiText(service.label)}</th>`).join('')}<th>TỔNG LƯỢT</th><th class="service-usage-leader-head">DỊCH VỤ DÙNG NHIỀU NHẤT</th></tr></thead>
    <tbody>${rows.map((row,index)=>`<tr><td class="revenue-stt-col">${index+1}</td><td class="revenue-period-col">Tháng ${row.month+1}</td>${services.map(service=>serviceUsageCell(row.totals?.[service.id])).join('')}<td class="revenue-total-cell">${row.totalUses||'—'}</td><td class="service-usage-leader">${row.leaders.length ? `${escapeUiText(row.leaders.join(' / '))}<span>${row.maxUses} lượt</span>` : '—'}</td></tr>`).join('')}</tbody>
    <tfoot><tr><td colspan="2">TỔNG CỘNG</td>${services.map(service=>`<td>${serviceTotals[service.id]||'—'}</td>`).join('')}<td>${totalAll||0}</td><td>${(()=>{let max=0;services.forEach(service=>{max=Math.max(max,serviceTotals[service.id]||0)});const leaders=max?services.filter(service=>(serviceTotals[service.id]||0)===max).map(service=>service.label):[];return leaders.length?`${escapeUiText(leaders.join(' / '))} • ${max} lượt`:'—';})()}</td></tr></tfoot>
  </table>`;
}
function serviceUsageRender(year, services = revenueServiceCatalog()) {
  if (serviceUsageTitle) serviceUsageTitle.textContent=`DỊCH VỤ ĐƯỢC KHÁCH SỬ DỤNG NHIỀU NHẤT — ${year}`;
  if (serviceUsageTableWrap) serviceUsageTableWrap.innerHTML=serviceUsageTableHtml(year,services);
  const now=new Date();
  const currentRows=serviceUsageMonthRows(year,services);
  const current=currentRows[now.getFullYear()===year ? now.getMonth() : 0] || currentRows[0];
  const yearTotals=Object.fromEntries(services.map(service=>[service.id,0]));
  currentRows.forEach(row=>services.forEach(service=>{yearTotals[service.id]+=Number(row.totals?.[service.id]||0)}));
  let max=0; services.forEach(service=>{max=Math.max(max,yearTotals[service.id]||0)});
  const leaders=max?services.filter(service=>(yearTotals[service.id]||0)===max).map(service=>service.label):[];
  if (serviceUsageMeta) serviceUsageMeta.innerHTML=`
    <span class="revenue-summary-chip">Nguồn dữ liệu: <b>Lịch khách hàng đã Hoàn thành</b></span>
    <span class="revenue-summary-chip">Năm theo dõi: <b>${year}</b></span>
    <span class="revenue-summary-chip">Tổng lượt đã sử dụng: <b>${Object.values(yearTotals).reduce((sum,v)=>sum+Number(v||0),0)}</b></span>
    <span class="revenue-summary-chip">Dịch vụ nổi bật: <b>${leaders.length ? `${escapeUiText(leaders.join(' / '))} (${max} lượt)` : 'Chưa có dữ liệu'}</b></span>`;
}
function revenueRenderDashboard() {
  const now=new Date();
  const year=now.getFullYear();
  const month=now.getMonth();
  const services=revenueServiceCatalog();
  if (revenueDailyTitle) revenueDailyTitle.textContent='THEO DÕI DOANH THU NGÀY CÁC DỊCH VỤ';
  if (revenueMonthlyTitle) revenueMonthlyTitle.textContent='THEO DÕI DOANH THU THÁNG CÁC DỊCH VỤ';
  if (revenueDailyTableWrap) revenueDailyTableWrap.innerHTML=revenueDailyTableHtml(year,month,services);
  if (revenueMonthlyTableWrap) revenueMonthlyTableWrap.innerHTML=revenueMonthTableHtml(year,services);
  if (revenueYearlyTableWrap) revenueYearlyTableWrap.innerHTML=revenueYearTableHtml(services);
  serviceUsageRender(year,services);
  const start=new Date(year,month,1); const end=new Date(year,month+1,1);
  const agg=revenueAggregateForRange(start,end,services);
  const completedThisMonth=revenueCompletedAppointments().filter(item=>{const d=revenueLocalDate(item.startAt); return d && d>=start && d<end;}).length;
  if (revenueDailyMeta) revenueDailyMeta.innerHTML=`
    <span class="revenue-summary-chip">Tháng hiện tại: <b>${month+1}/${year}</b></span>
    <span class="revenue-summary-chip">Số ngày: <b>${revenueDaysInMonth(year,month)}</b></span>
    <span class="revenue-summary-chip">Lịch hoàn thành: <b>${completedThisMonth}</b></span>
    <span class="revenue-summary-chip">Tổng doanh thu: <b>${revenueFormatMoney(agg.grandTotal)}</b></span>
    <span class="revenue-summary-chip">Số dịch vụ theo dõi: <b>${services.length}</b></span>`;
  revenueRefreshArchives();
  revenueRefreshYearArchives();
}
function revenueOpenArchive() {
  const archives=revenueRefreshArchives();
  if (revenueArchiveList) revenueArchiveList.innerHTML=archives.length ? archives.map(item=>`<div class="revenue-archive-item">
    <div><strong>${escapeUiText(item.label)}</strong><small>${item.rows.length} ngày • cập nhật từ lịch khách hàng đã hoàn thành</small></div>
    <div class="revenue-archive-amount">${revenueFormatMoney(item.total)}</div>
    <button class="revenue-archive-open" type="button" data-revenue-archive-open="${item.key}">Mở</button>
  </div>`).join('') : '<div class="revenue-empty-state">Chưa có tháng cũ để lưu trong thư mục.</div>';
  revenueArchiveList?.querySelectorAll('[data-revenue-archive-open]').forEach(btn=>btn.addEventListener('click',()=>revenueOpenArchiveDetail(btn.dataset.revenueArchiveOpen)));
  revenueArchiveBackdrop?.classList.add('open'); revenueArchiveBackdrop?.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function revenueCloseArchive() { revenueArchiveBackdrop?.classList.remove('open'); revenueArchiveBackdrop?.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
function revenueSnapshotTableHtml(snapshot) {
  const rows=(snapshot.rows||[]).map(row=>({day:row.day,date:new Date(snapshot.year,snapshot.month,row.day),totals:row.totals||{},grandTotal:row.grandTotal||0}));
  return revenueRenderTable({firstHeader:'NGÀY',rows,services:snapshot.services||[],firstCell:(row)=>`${String(row.day).padStart(2,'0')}/${String(snapshot.month+1).padStart(2,'0')}<span class="revenue-day-weekday">${new Intl.DateTimeFormat('vi-VN',{weekday:'short'}).format(row.date)}</span>`});
}
function revenueOpenArchiveDetail(key) {
  const item=revenueArchiveStore().find(entry=>entry.key===key);
  if (!item) return;
  if (revenueArchiveDetailLabel) revenueArchiveDetailLabel.textContent=item.label;
  if (revenueArchiveDetailContent) revenueArchiveDetailContent.innerHTML=`<div class="revenue-pdf-page"><div class="revenue-report-caption"><div><h3>${escapeUiText(item.label)}</h3><p>Doanh thu theo ngày các dịch vụ</p></div><span>Tổng: ${revenueFormatMoney(item.total)}</span></div><div class="revenue-table-wrap">${revenueSnapshotTableHtml(item)}</div></div>`;
  revenueArchiveDetailBackdrop?.classList.add('open'); revenueArchiveDetailBackdrop?.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function revenueCloseArchiveDetail() { revenueArchiveDetailBackdrop?.classList.remove('open'); revenueArchiveDetailBackdrop?.setAttribute('aria-hidden','true'); document.body.style.overflow=revenueArchiveBackdrop?.classList.contains('open')?'hidden':''; }
function revenueReportMonths() {
  const now=new Date();
  const completed=revenueCompletedAppointments();
  const dates=completed.map(item=>revenueLocalDate(item.startAt)).filter(Boolean);
  let start=dates.length ? new Date(Math.min(...dates.map(d=>d.getTime()))) : new Date(now.getFullYear(),0,1);
  start=new Date(start.getFullYear(),start.getMonth(),1);
  const months=[];
  for (let cursor=new Date(start); cursor<=now; cursor=new Date(cursor.getFullYear(),cursor.getMonth()+1,1)) months.push({year:cursor.getFullYear(),month:cursor.getMonth()});
  return months;
}
function revenueReportPageHtml(year,month) {
  const services=revenueServiceCatalog();
  const rows=revenueDailyRows(year,month,services);
  const total=rows.reduce((sum,row)=>sum+row.grandTotal,0);
  return `<section class="revenue-pdf-page"><div class="revenue-report-caption"><div><h3>${revenueMonthLabel(year,month)}</h3><p>Doanh thu theo ngày các dịch vụ</p></div><span>Tổng: ${revenueFormatMoney(total)}</span></div><div class="revenue-table-wrap">${revenueRenderTable({firstHeader:'NGÀY',rows,services,firstCell:(row)=>`${String(row.day).padStart(2,'0')}/${String(month+1).padStart(2,'0')}`})}</div></section>`;
}
function revenueOpenAll() {
  const months=revenueReportMonths();
  if (revenueAllContent) revenueAllContent.innerHTML=months.map(item=>revenueReportPageHtml(item.year,item.month)).join('') || '<div class="revenue-empty-state">Chưa có dữ liệu doanh thu.</div>';
  revenueAllBackdrop?.classList.add('open'); revenueAllBackdrop?.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function revenueCloseAll() { revenueAllBackdrop?.classList.remove('open'); revenueAllBackdrop?.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
function revenuePrintAll() {
  const reportHtml=(revenueAllContent?.innerHTML || revenueReportMonths().map(item=>revenueReportPageHtml(item.year,item.month)).join(''));
  const popup=window.open('','_blank','width=1200,height=900');
  if (!popup) { showToast('Trình duyệt đang chặn cửa sổ in. Hãy cho phép popup rồi thử lại.'); return; }
  popup.document.write(`<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Báo cáo doanh thu Beauty Moment</title><style>body{font-family:Arial,sans-serif;color:#2d2327;padding:20px}.revenue-pdf-page{page-break-after:always;margin-bottom:28px}.revenue-pdf-page:last-child{page-break-after:auto}h3{margin:0 0 5px}.revenue-report-caption{display:flex;justify-content:space-between;gap:16px;margin-bottom:12px}table{border-collapse:collapse;width:100%;font-size:10px}th,td{border:1px solid #bbb;padding:5px;text-align:right}th:first-child,td:first-child{text-align:center}th{background:#dcebc9;color:#7b460f}.revenue-zero{color:#999}.revenue-total-cell,tfoot td{font-weight:bold}@media print{body{padding:0}}</style></head><body><h1>BÁO CÁO DOANH THU CÁC DỊCH VỤ</h1>${reportHtml}</body></html>`);
  popup.document.close();
  setTimeout(()=>{popup.focus(); popup.print();},250);
}
const WAITLIST_KEY = 'beauty_waitlist_v29';
function waitlistStore() { try { return JSON.parse(localStorage.getItem(WAITLIST_KEY) || '[]'); } catch { return []; } }
function saveWaitlistStore(items) { localStorage.setItem(WAITLIST_KEY, JSON.stringify(items)); }
const STAFF_KEY = 'beauty_staff_v23';
const STAFF_APPLICATION_KEY = 'beauty_staff_applications_v41';
const STAFF_ARCHIVE_KEY = 'beauty_staff_archive_v53';
const STAFF_RATING_CRITERIA_KEY = 'beauty_staff_rating_criteria_v42';
const STAFF_QUARTER_ARCHIVE_KEY = 'beauty_staff_quarter_archive_v42';
const STAFF_RATING_CRITERIA_DEFAULTS = [
  { id:'criterion-1', classification:'Loại 1', minCustomers:50, minAverage:4, note:'≥ 50 khách và từ 4 sao trở lên' },
  { id:'criterion-2', classification:'Loại 2', minCustomers:30, minAverage:4, note:'≥ 30 khách và từ 4 sao trở lên' },
  { id:'criterion-3a', classification:'Loại 3', minCustomers:30, minAverage:4, note:'Nhánh A: ≥ 30 khách và từ 4 sao trở lên' },
  { id:'criterion-3b', classification:'Loại 3', minCustomers:50, minAverage:3, note:'Nhánh B: ≥ 50 khách và từ 3 sao trở lên' }
];
const STAFF_DEFAULTS = [
  { id:'staff-linh', name:'Linh', fullName:'Nguyễn Thị Linh', phone:'', address:'', officialStartDate:'', role:'Kỹ thuật viên', active:true },
  { id:'staff-thao', name:'Thảo', fullName:'Hoàng Thị Thảo', phone:'', address:'', officialStartDate:'', role:'Kỹ thuật viên', active:true },
  { id:'staff-vy', name:'Vy', fullName:'Lê Thị Vy', phone:'', address:'', officialStartDate:'', role:'Kỹ thuật viên', active:true }
];
function capitalizeVietnameseNamePart(value='') {
  const text = String(value || '').trim();
  if (!text) return '';
  return text.charAt(0).toLocaleUpperCase('vi-VN') + text.slice(1).toLocaleLowerCase('vi-VN');
}
function staffShortNameFromRecord(item={}) {
  const fullName = String(item?.fullName || '').trim();
  if (fullName) {
    const last = fullName.split(/\s+/).filter(Boolean).pop() || '';
    return capitalizeVietnameseNamePart(last);
  }
  const raw = String(item?.name || '').trim();
  const normalized = normalizePersonText(raw);
  if (!raw || normalized === 'nhan vien' || normalized === 'vien') return '';
  return capitalizeVietnameseNamePart(raw.split(/\s+/).filter(Boolean).pop() || raw);
}
function normalizeStaffRecord(item, index=0) {
  const fallback = STAFF_DEFAULTS.find(row => row.id === item?.id) || {};
  const fullName = String(item?.fullName || fallback.fullName || item?.name || '').trim();
  const shortName = staffShortNameFromRecord({fullName, name:item?.name || fallback.name || ''}) || String(fallback.name || '').trim();
  return {
    id: item?.id || `staff-${Date.now()}-${index}`,
    name: shortName,
    fullName,
    phone: String(item?.phone || ''),
    address: String(item?.address || ''),
    officialStartDate: String(item?.officialStartDate || ''),
    role: item?.role || 'Kỹ thuật viên',
    active: item?.active !== false
  };
}
function staffStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STAFF_KEY) || 'null');
    if (Array.isArray(saved) && saved.length) return saved.map(normalizeStaffRecord);
  } catch {}
  return STAFF_DEFAULTS.map(normalizeStaffRecord);
}
function saveStaffStore(items) {
  const clean = Array.isArray(items) ? items.map(normalizeStaffRecord) : [];
  localStorage.setItem(STAFF_KEY, JSON.stringify(clean));
}
function staffArchiveStore() {
  try {
    const value = JSON.parse(localStorage.getItem(STAFF_ARCHIVE_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}
function saveStaffArchiveStore(items) {
  localStorage.setItem(STAFF_ARCHIVE_KEY, JSON.stringify(Array.isArray(items) ? items : []));
}
function syncStaffReferencesInAppointments(staffId, shortName) {
  if (!staffId || !shortName) return false;
  const appointments = appointmentStore();
  let changed = false;
  appointments.forEach(item => {
    if (item?.serviceStaffId !== staffId) return;
    if (item.serviceStaffName !== shortName) { item.serviceStaffName = shortName; changed = true; }
    if (item.rating && item.ratingStaffName !== shortName) { item.ratingStaffName = shortName; changed = true; }
  });
  if (changed) saveAppointmentStore(appointments);
  return changed;
}
function ensureStaffStoreV49() {
  try {
    const saved = JSON.parse(localStorage.getItem(STAFF_KEY) || 'null');
    if (!Array.isArray(saved) || !saved.length) {
      saveStaffStore(STAFF_DEFAULTS);
      return;
    }
    const upgraded = saved.map(normalizeStaffRecord);
    if (JSON.stringify(saved) !== JSON.stringify(upgraded)) saveStaffStore(upgraded);
    upgraded.forEach(staff => syncStaffReferencesInAppointments(staff.id, staff.name));
  } catch { saveStaffStore(STAFF_DEFAULTS); }
}
function staffApplicationStore() {
  try {
    const value = JSON.parse(localStorage.getItem(STAFF_APPLICATION_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}
function saveStaffApplicationStore(items) {
  localStorage.setItem(STAFF_APPLICATION_KEY, JSON.stringify(Array.isArray(items) ? items : []));
}

function staffRatingCriteriaStore() {
  try {
    const value = JSON.parse(localStorage.getItem(STAFF_RATING_CRITERIA_KEY) || 'null');
    if (Array.isArray(value) && value.length) {
      return value.map((item,index)=>({
        id: item?.id || `criterion-${Date.now()}-${index}`,
        classification: String(item?.classification || `Loại ${index+1}`).trim(),
        minCustomers: Math.max(0, Number(item?.minCustomers) || 0),
        minAverage: Math.max(0, Math.min(5, Number(item?.minAverage) || 0)),
        note: String(item?.note || '')
      }));
    }
  } catch {}
  return STAFF_RATING_CRITERIA_DEFAULTS.map(item=>({...item}));
}
function saveStaffRatingCriteriaStore(items) {
  localStorage.setItem(STAFF_RATING_CRITERIA_KEY, JSON.stringify(Array.isArray(items) ? items : []));
}
function ensureStaffRatingCriteriaV42() {
  try {
    const saved = JSON.parse(localStorage.getItem(STAFF_RATING_CRITERIA_KEY) || 'null');
    if (!Array.isArray(saved) || !saved.length) saveStaffRatingCriteriaStore(STAFF_RATING_CRITERIA_DEFAULTS);
  } catch { saveStaffRatingCriteriaStore(STAFF_RATING_CRITERIA_DEFAULTS); }
}
function staffQuarterArchiveStore() {
  try {
    const value = JSON.parse(localStorage.getItem(STAFF_QUARTER_ARCHIVE_KEY) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch { return {}; }
}
function saveStaffQuarterArchiveStore(value) {
  localStorage.setItem(STAFF_QUARTER_ARCHIVE_KEY, JSON.stringify(value && typeof value === 'object' ? value : {}));
}

function salonProfile() {
  const fallback = {
    name: 'BEAUTY MOMENT',
    address: 'Chủ tiệm chưa cập nhật địa chỉ',
    phone: 'Chủ tiệm chưa cập nhật số điện thoại',
    logo: 'assets/salon-owner-logo.svg'
  };
  try {
    const saved = JSON.parse(localStorage.getItem(SALON_PROFILE_KEY) || 'null');
    return saved ? { ...fallback, ...saved } : fallback;
  } catch { return fallback; }
}
function renderSalonProfile() {
  const salon = salonProfile();
  if ($('salonMiniName')) $('salonMiniName').textContent = salon.name;
  if ($('salonMiniAddress')) $('salonMiniAddress').textContent = `Địa chỉ: ${salon.address}`;
  if ($('salonMiniPhone')) $('salonMiniPhone').textContent = `SĐT: ${salon.phone}`;
  if ($('salonMiniLogo')) $('salonMiniLogo').src = salon.logo;
  if ($('contactTitle')) $('contactTitle').textContent = salon.name;
  if ($('contactSalonName')) $('contactSalonName').textContent = salon.name;
  if ($('contactSalonAddress')) $('contactSalonAddress').textContent = salon.address;
  if ($('contactSalonPhone')) $('contactSalonPhone').textContent = salon.phone;
  if ($('contactSalonLogo')) $('contactSalonLogo').src = salon.logo;
  if ($('brandSalonLogo')) {
    $('brandSalonLogo').src = salon.logo;
    $('brandSalonLogo').alt = `Logo ${salon.name}`;
  }
  if ($('brandSalonName')) $('brandSalonName').textContent = salon.name;
  if (managerSalonLogoPreview) managerSalonLogoPreview.src = salon.logo;
}
function fillManagerSalonForm() {
  const salon = salonProfile();
  if ($('managerSalonName')) $('managerSalonName').value = salon.name || '';
  if ($('managerSalonPhone')) $('managerSalonPhone').value = salon.phone || '';
  if ($('managerSalonAddress')) $('managerSalonAddress').value = salon.address || '';
  if (managerSalonLogoPreview) managerSalonLogoPreview.src = salon.logo;
  if ($('managerSalonMessage')) $('managerSalonMessage').textContent = '';
}
function setContactModeForSession() {
  const isManager = getSession()?.role === 'Quản lý';
  if (contactReadOnlyView) contactReadOnlyView.hidden = isManager;
  if (managerSalonForm) managerSalonForm.hidden = !isManager;
  const eyebrow = contactBackdrop?.querySelector('.contact-hero .eyebrow');
  if (eyebrow) eyebrow.textContent = isManager ? 'THÔNG TIN TIỆM • CHẾ ĐỘ QUẢN LÝ' : 'THÔNG TIN LIÊN HỆ';
  if (isManager) fillManagerSalonForm();
}
function notificationEnabledForRole(role='') {
  return role === 'Khách hàng' || role === 'Quản lý' || role === 'Nhân viên';
}
function notificationBelongsToSession(item, session) {
  if (!item || !session || !notificationEnabledForRole(session.role)) return false;
  const phone = notificationKeyForPhone(session.phone);
  if (item.recipientRole && item.recipientRole !== session.role) return false;
  if (item.recipientPhone && item.recipientPhone !== '*' && item.recipientPhone !== phone) return false;
  if (item.recipientRole || item.recipientPhone) return true;
  return false;
}
function notificationsForSession(session) {
  if (!session || !notificationEnabledForRole(session.role)) return [];
  pruneExpiredPromotionNotifications();
  return notificationStore()
    .filter(item => notificationBelongsToSession(item, session))
    .filter(item => !(item?.type === 'promotion' && isPromotionExpired(item)))
    .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
}
function seedCustomerNotifications(session) {
  if (!session || session.role !== 'Khách hàng') return;
  const phone = notificationKeyForPhone(session.phone);
  const data = notificationStore();
  if (data.some(item => item.recipientPhone === phone)) return;
  const now = Date.now();
  data.push(
    {
      id: `welcome-${phone}`,
      recipientPhone: phone,
      type: 'welcome',
      title: `Chào mừng ${session.name}`,
      message: 'Tài khoản khách hàng của bạn đã sẵn sàng. Từ đây, thông báo lịch hẹn và ưu đãi sẽ được gửi vào chuông này.',
      content: `Xin chào ${session.name},\n\nTài khoản khách hàng của bạn đã được kích hoạt thành công trên Beauty Moment. Từ bây giờ, các thông tin liên quan đến lịch hẹn, nhắc lịch, thay đổi lịch và chương trình ưu đãi từ tiệm sẽ được gửi trực tiếp vào Trung tâm thông báo này.\n\nBạn chỉ cần bấm vào biểu tượng chuông để xem các thông báo mới. Những thông báo chưa đọc sẽ được đếm bằng con số màu đỏ trên chuông.\n\nCảm ơn bạn đã đồng hành cùng Beauty Moment.`,
      createdAt: new Date(now - 3 * 60 * 1000).toISOString(),
      read: false
    },
    {
      id: `promo-${phone}`,
      recipientPhone: phone,
      type: 'promotion',
      title: 'Ưu đãi dành cho khách đặt lịch online',
      message: 'Thông báo mẫu: chương trình khuyến mại từ tiệm sẽ xuất hiện tại đây khi Chủ/Quản lý gửi đến khách hàng.',
      content: `CHƯƠNG TRÌNH ƯU ĐÃI KHÁCH HÀNG ONLINE\n\nBeauty Moment gửi tặng bạn chương trình ưu đãi dành riêng cho khách đặt lịch trực tuyến. Khi Chủ/Quản lý tạo một chương trình khuyến mại thật, toàn bộ nội dung chương trình, điều kiện áp dụng, thời gian bắt đầu, thời gian kết thúc và các lưu ý sẽ được hiển thị đầy đủ tại cửa sổ này.\n\nĐây hiện là nội dung mô phỏng để kiểm tra luồng Khách hàng ← Thông báo ← Chủ/Quản lý.`,
      createdAt: new Date(now - 42 * 60 * 1000).toISOString(),
      read: false
    },
    {
      id: `booking-${phone}`,
      recipientPhone: phone,
      type: 'booking',
      title: 'Nhắc lịch và cập nhật lịch hẹn',
      message: 'Sau này hệ thống sẽ dùng khu vực này để báo xác nhận lịch, thay đổi lịch hoặc nhắc khách trước giờ hẹn.',
      content: `THÔNG BÁO LỊCH HẸN\n\nKhu vực thông báo sẽ được liên kết với dữ liệu đặt lịch của khách hàng. Khi lịch được xác nhận, thay đổi, hủy hoặc sắp đến giờ hẹn, hệ thống có thể tạo thông báo và gửi tới đúng tài khoản khách.\n\nThông báo chi tiết sẽ có thể bao gồm: dịch vụ, ngày giờ, nhân viên phục vụ, trạng thái lịch và ghi chú từ tiệm.`,
      createdAt: new Date(now - 2 * 60 * 60 * 1000).toISOString(),
      read: false
    }
  );
  saveNotificationStore(data);
}
function ensureVision10TestNotifications(session) {
  if (!session || session.role !== 'Khách hàng') return;
  const phone = notificationKeyForPhone(session.phone);
  const data = notificationStore();
  const now = Date.now();
  const samples = [
    {
      id: `v10-promo-${phone}`,
      recipientPhone: phone,
      type: 'promotion',
      title: 'Ưu đãi mới dành cho khách hàng',
      message: 'Thông báo thử nghiệm Vision 10: ưu đãi đặt lịch online đã được gửi đến tài khoản của bạn.',
      content: `THÔNG BÁO THỬ NGHIỆM — VISION 10\n\nBeauty Moment gửi bạn một thông báo ưu đãi mẫu để kiểm tra tab “Chưa xem”.\n\nKhi bạn mở thông báo này, hệ thống sẽ tự chuyển nó sang tab “Đã xem” và số thông báo chưa xem trên chuông sẽ giảm đi 1.`,
      createdAt: new Date(now - 4 * 60 * 1000).toISOString(),
      read: false
    },
    {
      id: `v10-slot-${phone}`,
      recipientPhone: phone,
      type: 'booking',
      title: 'Có thêm khung giờ trống hôm nay',
      message: 'Thông báo thử nghiệm: tiệm vừa cập nhật thêm một số khung giờ còn trống.',
      content: `THÔNG BÁO THỬ NGHIỆM — KHUNG GIỜ TRỐNG\n\nĐây là thông báo mẫu để bạn kiểm tra cơ chế Chưa xem → Đã xem.\n\nSau này, nội dung thật có thể được gửi từ tài khoản Chủ/Quản lý tới đúng khách hàng theo dữ liệu vận hành của tiệm.`,
      createdAt: new Date(now - 16 * 60 * 1000).toISOString(),
      read: false
    },
    {
      id: `v10-care-${phone}`,
      recipientPhone: phone,
      type: 'welcome',
      title: 'Mẹo nhỏ trước khi đến tiệm',
      message: 'Thông báo thử nghiệm: bạn có thể xem dịch vụ và mẫu móng trước khi đến tiệm.',
      content: `THÔNG BÁO THỬ NGHIỆM — MẸO NHỎ\n\nBạn có thể xem trước dịch vụ, giá, thời gian và mẫu móng ngay trên tài khoản khách hàng.\n\nThông báo này được thêm vào Vision 10 để bạn có nhiều mục “Chưa xem” để kiểm tra luồng.`,
      createdAt: new Date(now - 28 * 60 * 1000).toISOString(),
      read: false
    }
  ];
  let changed = false;
  samples.forEach(sample => {
    if (!data.some(item => item.id === sample.id)) {
      data.push(sample);
      changed = true;
    }
  });
  if (changed) saveNotificationStore(data);
}

function seedManagerNotifications(session) {
  if (!session || session.role !== 'Quản lý') return;
  const phone = notificationKeyForPhone(session.phone);
  const data = notificationStore();
  if (data.some(item => item.recipientRole === 'Quản lý' && item.recipientPhone === phone)) return;
  const now = Date.now();
  data.push(
    {
      id: `owner-welcome-${phone}`,
      recipientPhone: phone,
      recipientRole: 'Quản lý',
      type: 'welcome',
      title: `Chào mừng ${session.name}`,
      message: 'Trung tâm thông báo của tài khoản Quản lý đã sẵn sàng để nhận nhắc việc và cập nhật vận hành.',
      content: `Xin chào ${session.name},\n\nTài khoản Quản lý của bạn đã được kích hoạt trên Beauty Moment. Từ bây giờ, các thông báo quan trọng như lịch mới chờ xác nhận, cập nhật ưu đãi, nhắc việc vận hành và tin tức nội bộ có thể được hiển thị tại biểu tượng chuông này.\n\nBạn có thể mở chuông để xem nhanh các mục Chưa xem và Đã xem, giống như luồng thông báo phía Khách hàng.`,
      createdAt: new Date(now - 6 * 60 * 1000).toISOString(),
      read: false
    },
    {
      id: `owner-pending-${phone}`,
      recipientPhone: phone,
      recipientRole: 'Quản lý',
      type: 'booking',
      title: 'Có lịch hẹn mới cần xác nhận',
      message: 'Khách hàng vừa gửi thêm lịch hẹn online. Bạn có thể dùng chuông này để theo dõi việc cần xử lý.',
      content: `THÔNG BÁO VẬN HÀNH\n\nHệ thống vừa mô phỏng một lịch hẹn mới từ khách hàng. Ở các Vision tiếp theo, phía Quản lý sẽ dùng trung tâm thông báo này để nhận biết lịch nào đang chờ xác nhận, lịch nào cần đổi giờ hoặc lịch nào cần theo dõi thêm.`,
      createdAt: new Date(now - 32 * 60 * 1000).toISOString(),
      read: false
    },
    {
      id: `owner-campaign-${phone}`,
      recipientPhone: phone,
      recipientRole: 'Quản lý',
      type: 'promotion',
      title: 'Nhắc cập nhật chương trình ưu đãi',
      message: 'Bạn có thể tạo thông báo khuyến mại để gửi cho khách từ giao diện Quản lý ở các Vision tiếp theo.',
      content: `NHẮC VIỆC CHƯƠNG TRÌNH ƯU ĐÃI\n\nKhu vực này dùng để mô phỏng các thông báo điều hành dành cho Quản lý. Sau này, khi bạn tạo chương trình khuyến mại hoặc gửi thông báo cho khách hàng, hệ thống có thể hiện nhắc việc, trạng thái gửi và kết quả đồng bộ ngay tại chuông thông báo.`,
      createdAt: new Date(now - 95 * 60 * 1000).toISOString(),
      read: false
    }
  );
  saveNotificationStore(data);
}

function ensureManagerNotificationDetails(session) {
  if (!session || session.role !== 'Quản lý') return;
  const data = notificationStore();
  let changed = false;
  data.forEach(item => {
    if (!notificationBelongsToSession(item, session)) return;
    if (item.content) return;
    if (item.type === 'welcome') {
      item.content = `Xin chào ${session.name},\n\nTài khoản Quản lý của bạn đã được kích hoạt trên Beauty Moment. Trung tâm thông báo này sẽ dùng để nhận việc mới và các cập nhật vận hành của tiệm.`;
      changed = true;
    } else if (item.type === 'promotion') {
      item.content = `Bạn đang xem một thông báo điều hành dành cho tài khoản Quản lý. Sau này, các cập nhật ưu đãi, chiến dịch gửi khách hàng và nhắc việc nội bộ sẽ hiện tại đây.`;
      changed = true;
    } else if (item.type === 'booking') {
      item.content = `Bạn đang xem một thông báo lịch hẹn dành cho Quản lý. Ở các Vision tiếp theo, mọi lịch mới chờ xác nhận hoặc thay đổi lịch sẽ được đồng bộ về đây.`;
      changed = true;
    }
  });
  if (changed) saveNotificationStore(data);
}

function notificationIcon(type) {
  if (type === 'promotion') return '🎁';
  if (type === 'announcement') return '📣';
  if (type === 'booking') return '🗓';
  if (type === 'care') return '💗';
  if (type === 'care-alert') return '⚠';
  return '✦';
}
function notificationTime(iso) {
  const diff = Math.max(0, Date.now() - new Date(iso).getTime());
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Vừa xong';
  if (mins < 60) return `${mins} phút trước`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  return `${days} ngày trước`;
}
function ensureNotificationDetails(session) {
  if (!session || session.role !== 'Khách hàng') return;
  const phone = notificationKeyForPhone(session.phone);
  const data = notificationStore();
  let changed = false;
  data.forEach(item => {
    if (item.recipientPhone !== phone && item.recipientPhone !== '*') return;
    if (item.content) return;
    if (item.type === 'welcome') {
      item.content = `Xin chào ${session.name},

Tài khoản khách hàng của bạn đã được kích hoạt thành công trên Beauty Moment. Từ bây giờ, các thông tin liên quan đến lịch hẹn, nhắc lịch, thay đổi lịch và chương trình ưu đãi từ tiệm sẽ được gửi trực tiếp vào Trung tâm thông báo này.

Bạn chỉ cần bấm vào biểu tượng chuông để xem các thông báo mới. Những thông báo chưa đọc sẽ được đếm bằng con số màu đỏ trên chuông.

Cảm ơn bạn đã đồng hành cùng Beauty Moment.`;
      changed = true;
    } else if (item.type === 'promotion') {
      item.content = `CHƯƠNG TRÌNH ƯU ĐÃI KHÁCH HÀNG ONLINE

Beauty Moment gửi tặng bạn chương trình ưu đãi dành riêng cho khách đặt lịch trực tuyến. Khi Chủ/Quản lý tạo một chương trình khuyến mại thật, toàn bộ nội dung chương trình, điều kiện áp dụng, thời gian bắt đầu, thời gian kết thúc và các lưu ý sẽ được hiển thị đầy đủ tại cửa sổ này.

Đây hiện là nội dung mô phỏng để kiểm tra luồng Khách hàng ← Thông báo ← Chủ/Quản lý.`;
      changed = true;
    } else if (item.type === 'booking') {
      item.content = `THÔNG BÁO LỊCH HẸN

Khu vực thông báo sẽ được liên kết với dữ liệu đặt lịch của khách hàng. Khi lịch được xác nhận, thay đổi, hủy hoặc sắp đến giờ hẹn, hệ thống có thể tạo thông báo và gửi tới đúng tài khoản khách.

Thông báo chi tiết sẽ có thể bao gồm: dịch vụ, ngày giờ, nhân viên phục vụ, trạng thái lịch và ghi chú từ tiệm.`;
      changed = true;
    }
  });
  if (changed) saveNotificationStore(data);
}

function notificationTypeLabel(type) {
  if (type === 'promotion') return 'Chương trình ưu đãi';
  if (type === 'announcement') return 'Thông báo từ tiệm';
  if (type === 'booking') return 'Lịch hẹn';
  if (type === 'care') return 'Chăm sóc sau dịch vụ';
  if (type === 'care-alert') return 'Cảnh báo phản hồi';
  if (type === 'welcome') return 'Thông báo tài khoản';
  return 'Thông báo';
}
function notificationFullTime(iso) {
  try { return new Date(iso).toLocaleString('vi-VN', { hour:'2-digit', minute:'2-digit', day:'2-digit', month:'2-digit', year:'numeric' }); }
  catch { return ''; }
}
function openNotificationDetail(item) {
  if (!item) return;
  $('notificationDetailIcon').textContent = notificationIcon(item.type);
  $('notificationDetailType').textContent = notificationTypeLabel(item.type);
  $('notificationDetailTitle').textContent = item.title || 'Thông báo';
  $('notificationDetailSender').textContent = item.sender || salonProfile().name;
  $('notificationDetailTime').textContent = notificationFullTime(item.createdAt);
  $('notificationDetailBody').textContent = item.content || item.message || '';
  const actionWrap = $('notificationDetailActions');
  if (actionWrap) {
    const appt = item.appointmentId ? appointmentStore().find(x => x.id === item.appointmentId) : null;
    const canConfirm = item.actionType === 'reoffer-confirm' && appt && appointmentIsReofferPending(appt) && appt.reofferToken === item.reofferToken;
    actionWrap.hidden = !canConfirm;
    actionWrap.innerHTML = canConfirm ? `<button class="notification-confirm-reoffer-btn" type="button" data-detail-reoffer-confirm="${item.id}">Xác nhận lại lịch →</button>` : '';
    actionWrap.querySelector('[data-detail-reoffer-confirm]')?.addEventListener('click', () => {
      closeNotificationDetailModal();
      confirmReofferFromNotification(item.id);
    });
  }
  toggleNotificationPanel(false);
  notificationDetailBackdrop.dataset.notificationId = item.id || '';
  notificationDetailBackdrop.classList.add('open');
  notificationDetailBackdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeNotificationDetailModal() {
  notificationDetailBackdrop.classList.remove('open');
  notificationDetailBackdrop.setAttribute('aria-hidden','true');
  notificationDetailBackdrop.dataset.notificationId = '';
  document.body.style.overflow = '';
}
function normalizedAppointmentStatus(status='') {
  return String(status || '').trim().toLowerCase();
}
function appointmentStatusClass(status='') {
  const normalized = normalizedAppointmentStatus(status);
  if (normalized === 'đã nhận lịch' || normalized === 'đã xác nhận') return 'status-accepted';
  if (normalized === 'chờ xác nhận' || !normalized) return 'status-waiting';
  return 'status-other';
}
function appointmentIsAccepted(status='') {
  const normalized = normalizedAppointmentStatus(status);
  return normalized === 'đã nhận lịch' || normalized === 'đã xác nhận';
}
function appointmentIsPending(status='') {
  const normalized = normalizedAppointmentStatus(status);
  return normalized === 'chờ xác nhận' || !normalized;
}
function appointmentIsDeclined(status='') {
  const normalized = normalizedAppointmentStatus(status);
  return normalized === 'từ chối' || normalized === 'đã từ chối' || normalized === 'không nhận lịch';
}
function initialsForName(name='') {
  return String(name).trim().split(/\s+/).filter(Boolean).slice(-2).map(part => part[0]?.toUpperCase() || '').join('') || 'NV';
}
function saveAppointmentPatch(appointmentId, patch={}) {
  const data = appointmentStore();
  const index = data.findIndex(item => item.id === appointmentId);
  if (index < 0) return null;
  data[index] = { ...data[index], ...patch };
  saveAppointmentStore(data);
  return data[index];
}
// VISION 60 — Staff Availability Engine dùng chung cho Khách và Quản lý.
// Một nhân viên là một tài nguyên thời gian: Chờ xác nhận cũng giữ nhân viên nếu đã được chọn.
function appointmentHoldsStaffV60(item) {
  if (!item || !item.serviceStaffId && !item.serviceStaffName) return false;
  if (item.completed || appointmentIsDeclined(item.status)) return false;
  return appointmentIsPending(item.status) || appointmentIsAccepted(item.status) || ['scheduled','in-progress','service-done'].includes(item.staffWorkStatus);
}
function appointmentTimeRangeV60(item) {
  const start = new Date(item?.startAt || 0);
  let end = new Date(item?.endAt || 0);
  if (Number.isNaN(start.getTime())) return null;
  if (Number.isNaN(end.getTime()) || end <= start) {
    end = new Date(start);
    end.setMinutes(end.getMinutes() + durationToMinutes(item?.duration || SERVICE_DATA[item?.serviceId]?.duration || '60 phút'));
  }
  return { start, end };
}
function appointmentUsesStaffV60(item, staff) {
  if (!item || !staff) return false;
  if (item.serviceStaffId && staff.id) return item.serviceStaffId === staff.id;
  const target = normalizePersonText(item.serviceStaffName || '');
  if (!target) return false;
  const variants = [staff.name, staff.fullName, staffShortNameFromRecord(staff)].map(normalizePersonText).filter(Boolean);
  return variants.includes(target) || variants.some(value => value.split(' ').pop() === target.split(' ').pop());
}
function intervalsOverlapV60(aStart,aEnd,bStart,bEnd) { return aStart < bEnd && aEnd > bStart; }
function staffConflictsV60(staff, targetStart, targetEnd, excludeBookingId='') {
  if (!staff || !(targetStart instanceof Date) || !(targetEnd instanceof Date) || Number.isNaN(targetStart.getTime()) || Number.isNaN(targetEnd.getTime())) return [];
  return appointmentStore().filter(item => {
    if (!item || item.id === excludeBookingId || !appointmentHoldsStaffV60(item) || !appointmentUsesStaffV60(item,staff)) return false;
    const range = appointmentTimeRangeV60(item);
    return range ? intervalsOverlapV60(targetStart,targetEnd,range.start,range.end) : false;
  }).sort((a,b)=>new Date(a.startAt||0)-new Date(b.startAt||0));
}
function staffAvailabilityForAppointmentV60(staff, appointment, excludeBookingId=appointment?.id || '') {
  const range = appointmentTimeRangeV60(appointment);
  if (!range) return { available:false, conflicts:[], message:'Lịch chưa có thời gian hợp lệ.' };
  const conflicts = staffConflictsV60(staff,range.start,range.end,excludeBookingId);
  const first = conflicts[0];
  return { available:conflicts.length===0, conflicts, message:first ? `${staffShortNameFromRecord(staff)||staffNameForDisplay(staff)} bận ${first.displayTime||formatTimeFromDate(new Date(first.startAt))}–${first.displayEndTime||formatTimeFromDate(new Date(first.endAt))}` : 'Rảnh' };
}
function validateAssignedStaffV60(item) {
  if (!item?.serviceStaffId) return { available:true, conflicts:[] };
  const staff = staffStore().find(row=>row.id===item.serviceStaffId);
  return staff ? staffAvailabilityForAppointmentV60(staff,item,item.id) : { available:false, conflicts:[], message:'Nhân viên không còn trong danh sách hoạt động.' };
}

function openStaffSelectModal(appointmentId) {
  const item = appointmentStore().find(appt => appt.id === appointmentId);
  if (!item || appointmentIsDeclined(item.status) || item.completed) {
    showToast('Lịch này hiện không thể chọn nhân viên phục vụ.');
    return;
  }
  if (item.ratingFinalized) {
    showToast('Đánh giá đã được xác nhận. Nhân viên phục vụ và số sao đã được khóa.');
    return;
  }
  const selectingSession = getSession();
  staffSelectionAppointmentId = item.id;
  $('staffSelectServiceLabel').textContent = `${item.serviceName || 'Dịch vụ tại tiệm'} • ${item.displayDate || ''} ${item.displayTime || ''}–${item.displayEndTime || ''}`;
  const list = staffStore().filter(staff => staff.active !== false && String(staff.fullName || staff.name || '').trim());
  const cards = list.map(staff => {
    const customerName = staffShortNameFromRecord(staff) || staffNameForDisplay(staff);
    const selected = item.serviceStaffId === staff.id || normalizePersonText(item.serviceStaffName) === normalizePersonText(customerName);
    const availability = staffAvailabilityForAppointmentV60(staff,item,item.id);
    const busy = !availability.available;
    // Khách chỉ thấy những NV thực sự rảnh. Quản lý vẫn thấy NV bận để hiểu nguyên nhân bị khóa.
    if (busy && !selected && selectingSession?.role === 'Khách hàng') return '';
    const busyConflict = availability.conflicts[0];
    const busyText = busyConflict ? `Bận ${busyConflict.displayTime || formatTimeFromDate(new Date(busyConflict.startAt))}–${busyConflict.displayEndTime || formatTimeFromDate(new Date(busyConflict.endAt))}` : 'Bận';
    return `<button class="staff-select-card ${selected ? 'is-selected' : ''} ${busy ? 'is-busy' : ''}" type="button" data-service-staff-id="${staff.id}" ${busy?'disabled aria-disabled="true"':''}><span class="staff-avatar-mini">${initialsForName(customerName)}</span><span><strong>${escapeUiText(customerName)}</strong><span>${escapeUiText(staff.role || 'Nhân viên phục vụ')}${busy?` • ${escapeUiText(busyText)}`:''}</span></span><span class="staff-selected-mark">${busy ? (selected?'Trùng lịch':'Đã có lịch') : (selected ? 'Đã chọn' : 'Chọn')}</span></button>`;
  }).filter(Boolean);
  $('staffSelectList').innerHTML = cards.length ? cards.join('') : `<div class="waitlist-empty"><strong>${list.length ? 'Khung giờ này chưa còn nhân viên rảnh' : 'Chưa có nhân viên'}</strong><span>${list.length ? 'Hãy chọn khung giờ khác hoặc để tiệm sắp xếp lại nhân sự.' : 'Danh sách nhân viên được đồng bộ từ tài khoản Quản lý.'}</span></div>`;
  staffSelectBackdrop.classList.add('open');
  staffSelectBackdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  $$('[data-service-staff-id]').forEach(btn => btn.addEventListener('click', () => {
    const staff = list.find(s => s.id === btn.dataset.serviceStaffId);
    if (!staff || !staffSelectionAppointmentId) return;
    const lockToken = acquireBookingWriteLock();
    if (!lockToken) { showToast('Hệ thống đang cập nhật một lịch khác. Vui lòng chọn lại sau giây lát.'); return; }
    const before = appointmentStore().find(row=>row.id===staffSelectionAppointmentId);
    if (!before) { releaseBookingWriteLock(lockToken); return; }
    const availability = staffAvailabilityForAppointmentV60(staff,before,before.id);
    if (!availability.available) {
      releaseBookingWriteLock(lockToken);
      showToast(`${availability.message}. Vui lòng chọn nhân viên khác.`);
      openStaffSelectModal(before.id);
      return;
    }
    const previousStaff = before?.serviceStaffId ? staffStore().find(row=>row.id===before.serviceStaffId) : null;
    const customerName = staffShortNameFromRecord(staff) || staffNameForDisplay(staff);
    const assignmentPatch = selectingSession?.role === 'Quản lý'
      ? {serviceStaffId:staff.id, serviceStaffName:customerName, staffWorkStatus:'scheduled', staffStartedAt:null, staffServiceDoneAt:null}
      : {serviceStaffId:staff.id, serviceStaffName:customerName};
    const updated = saveAppointmentPatch(staffSelectionAppointmentId, assignmentPatch);
    releaseBookingWriteLock(lockToken);
    if (updated && appointmentIsAccepted(updated.status)) {
      if (previousStaff && previousStaff.id !== staff.id) createStaffAssignmentNotificationV59(updated, previousStaff, 'removed');
      if (!previousStaff || previousStaff.id !== staff.id) createStaffAssignmentNotificationV59(updated, staff, 'assigned');
    }
    closeStaffSelectModal();
    renderMySchedule();
    const managerSession=getSession(); if(managerSession?.role==='Quản lý' && managerScheduleBackdrop?.classList.contains('open')) renderManagerSchedule(managerSession);
    renderNotifications();
    showToast(`Đã chọn ${customerName} là NV phục vụ. Khung giờ này được giữ cho nhân viên ngay cả khi lịch còn Chờ xác nhận.`);
  }));
}
function closeStaffSelectModal() {
  if (!staffSelectBackdrop) return;
  staffSelectBackdrop.classList.remove('open');
  staffSelectBackdrop.setAttribute('aria-hidden','true');
  staffSelectionAppointmentId = null;
  document.body.style.overflow = myScheduleBackdrop?.classList.contains('open') ? 'hidden' : '';
}
function normalizeFeedbackText(value='') {
  return String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase().replace(/đ/g,'d')
    .replace(/[^a-z0-9\s]+/g,' ')
    .replace(/\s+/g,' ').trim();
}
function feedbackPhraseIncludes(normalized='', phrase='') {
  const source = ` ${normalizeFeedbackText(normalized)} `;
  const target = ` ${normalizeFeedbackText(phrase)} `;
  return target.trim() ? source.includes(target) : false;
}
function feedbackPreviousHasNegation(tokens, index, windowSize=3) {
  const negators = new Set(['khong','chua','chang','cha','chua','chua','chua','chang']);
  for (let i=Math.max(0,index-windowSize); i<index; i+=1) {
    if (negators.has(tokens[i])) return true;
  }
  return false;
}
function analyzeServiceFeedback(value='') {
  const raw = String(value || '').trim();
  if (!raw) return {label:'none', score:0, text:'Chưa có phản hồi', engine:'rules-v55', evidence:[]};
  const normalized = normalizeFeedbackText(raw);
  const tokens = normalized.split(' ').filter(Boolean);
  const evidence = [];
  let score = 0;

  // VISION 55: phân tích tiếng Việt theo CỤM TỪ + RANH GIỚI TỪ.
  // Không dùng includes() trên từ đơn nữa vì sẽ gây lỗi như “ưng” nằm trong “chung/trung”
  // hoặc “ổn” nằm trong “không”.
  const negativePhrases = [
    ['khong hai long',-6],['khong duoc tot',-5],['khong tot',-5],['khong dep',-4],['khong sach',-4],
    ['khong than thien',-5],['khong chuyen nghiep',-5],['khong tap trung',-5],['thai do kem',-6],
    ['thai do khong tot',-6],['phuc vu kem',-6],['dich vu kem',-6],['chat luong kem',-6],['noi chung kem',-5],
    ['rat te',-6],['qua te',-6],['that vong',-6],['cho qua lau',-5],['cho lau',-4],['lam dau',-5],
    ['dau rat',-4],['lam xau',-6],['khong ung',-4],['khong vua y',-5],['tho lo',-6],['bat lich su',-6],
    ['khong dung hen',-5],['lam viec rieng',-5],['lam cham',-5],['rat cham',-4],['mat thoi gian',-4],
    ['khong chu dao',-5],['khong nhiet tinh',-5],['khong de chiu',-4],['khong thoai mai',-4],['khong hai y',-5]
  ];
  const positivePhrases = [
    ['rat hai long',6],['rat tot',6],['tuyet voi',6],['rat dep',5],['rat ung',5],['than thien',3],
    ['nhiet tinh',3],['chuyen nghiep',4],['can than',3],['nhe nhang',3],['chu dao',4],['de chiu',3],
    ['sach se',3],['lam dep',3],['ung y',4],['hai long',4],['se quay lai',4],['cam on',1],['vui ve',3],
    ['khong te',3],['kha tot',3],['rat thoai mai',4],['rat thu gian',4]
  ];
  negativePhrases.forEach(([phrase,weight]) => {
    if (feedbackPhraseIncludes(normalized, phrase)) { score += weight; evidence.push(`${phrase}:${weight}`); }
  });
  positivePhrases.forEach(([phrase,weight]) => {
    if (feedbackPhraseIncludes(normalized, phrase)) { score += weight; evidence.push(`${phrase}:+${weight}`); }
  });

  // Nhận diện những câu có từ chen giữa, ví dụ “thái độ nhân viên không được tốt”.
  const patternRules = [
    [/\bthai do(?: [a-z0-9]+){0,4} khong(?: [a-z0-9]+){0,2} tot\b/,-7,'thai-do-khong-tot'],
    [/\bnhan vien(?: [a-z0-9]+){0,4} khong tap trung\b/,-6,'nhan-vien-khong-tap-trung'],
    [/\bchat luong(?: [a-z0-9]+){0,4} kem\b/,-6,'chat-luong-kem'],
    [/\bphuc vu(?: [a-z0-9]+){0,4} kem\b/,-6,'phuc-vu-kem'],
    [/\blam(?: [a-z0-9]+){0,2} cham\b/,-4,'lam-cham'],
    [/\bkhong(?: (?:duoc|that|su|rat|qua|he)){0,3} tot\b/,-5,'phu-dinh-tot'],
    [/\bkhong(?: (?:duoc|that|su|rat|qua|he)){0,3} hai long\b/,-6,'phu-dinh-hai-long']
  ];
  patternRules.forEach(([regex,weight,key]) => {
    if (regex.test(normalized)) { score += weight; evidence.push(`${key}:${weight}`); }
  });

  const negativeTokens = new Map([
    ['te',-2],['kem',-3],['xau',-3],['ban',-2],['dau',-2],['thatvong',-3],['lau',-1],
    ['cau',-1],['vo',-1],['nong',-1],['uc',-2],['buc',-2],['kho',-1]
  ]);
  const positiveTokens = new Map([
    ['tot',2],['dep',2],['thich',2],['ung',2],['hai',1],['tuyet',2],['on',1],['sach',1],['mem',1],['thoai',1]
  ]);
  tokens.forEach((token,index) => {
    if (positiveTokens.has(token)) {
      const w = positiveTokens.get(token);
      if (feedbackPreviousHasNegation(tokens,index,2)) {
        score -= Math.max(2,w);
        evidence.push(`negated-${token}:-${Math.max(2,w)}`);
      } else {
        score += w;
        evidence.push(`${token}:+${w}`);
      }
    }
    if (negativeTokens.has(token)) {
      // “không tệ” là một nhận xét tích cực/giảm mức tiêu cực, không cộng âm lần nữa.
      if (feedbackPreviousHasNegation(tokens,index,1)) return;
      const w = negativeTokens.get(token);
      score += w;
      evidence.push(`${token}:${w}`);
    }
  });

  const label = score <= -3 ? 'negative' : (score >= 4 ? 'positive' : 'neutral');
  return {
    label,
    score,
    text: label === 'negative' ? 'Cần xử lý' : (label === 'positive' ? 'Tích cực' : 'Trung tính'),
    engine:'rules-v55',
    evidence
  };
}
let feedbackBrowserAIModelPromise = null;
async function feedbackBrowserAIModel() {
  if (feedbackBrowserAIModelPromise) return feedbackBrowserAIModelPromise;
  feedbackBrowserAIModelPromise = (async () => {
    try {
      // Chrome/Edge Built-in AI (nếu máy người dùng có). Không bắt buộc; bản HTML vẫn chạy bằng bộ luật V55 khi không có AI cục bộ.
      if (typeof window.LanguageModel !== 'undefined' && typeof window.LanguageModel.create === 'function') {
        const availability = typeof window.LanguageModel.availability === 'function' ? await window.LanguageModel.availability() : 'available';
        if (!['available','readily','after-download'].includes(String(availability))) return null;
        return await window.LanguageModel.create({temperature:0,topK:1});
      }
      const legacy = window.ai?.languageModel;
      if (legacy && typeof legacy.create === 'function') return await legacy.create({temperature:0,topK:1});
    } catch (error) {
      console.warn('Browser AI chưa khả dụng, dùng bộ phân tích V55.', error);
    }
    return null;
  })();
  return feedbackBrowserAIModelPromise;
}
async function analyzeServiceFeedbackSmart(value='') {
  const rule = analyzeServiceFeedback(value);
  if (!String(value || '').trim()) return rule;
  // Khi bằng chứng ngôn ngữ đã rất rõ thì không cần hỏi AI, tránh kết quả AI làm ngược quy tắc nghiệp vụ.
  if (rule.score <= -6 || rule.score >= 7) return rule;
  try {
    const model = await Promise.race([
      feedbackBrowserAIModel(),
      new Promise(resolve => setTimeout(() => resolve(null), 900))
    ]);
    if (!model || typeof model.prompt !== 'function') return rule;
    const prompt = `Bạn là bộ phân loại phản hồi dịch vụ salon bằng tiếng Việt. Hãy đọc đúng ý nghĩa cả câu, chú ý phủ định như “không tốt”, “không được tốt”, “không tập trung”. Chỉ trả về đúng một từ: NEGATIVE, NEUTRAL hoặc POSITIVE. Phản hồi: ${JSON.stringify(String(value).slice(0,1600))}`;
    const answer = await Promise.race([
      model.prompt(prompt),
      new Promise(resolve => setTimeout(() => resolve(''), 1400))
    ]);
    const text = String(answer || '').toUpperCase();
    const aiLabel = text.includes('NEGATIVE') ? 'negative' : (text.includes('POSITIVE') ? 'positive' : (text.includes('NEUTRAL') ? 'neutral' : ''));
    if (!aiLabel) return rule;
    // Luật cứng về phản hồi tiêu cực rõ ràng luôn thắng để không bỏ sót khiếu nại.
    const effective = rule.label === 'negative' ? 'negative' : aiLabel;
    return {
      ...rule,
      label:effective,
      text:effective === 'negative' ? 'Cần xử lý' : (effective === 'positive' ? 'Tích cực' : 'Trung tính'),
      aiLabel,
      engine:'browser-ai+rules-v55'
    };
  } catch (error) {
    console.warn('Không phân loại được bằng Browser AI, dùng bộ luật V55.', error);
    return rule;
  }
}
function feedbackSentimentMeta(item) {
  const feedback = String(item?.serviceFeedback || '').trim();
  if (!feedback) return {label:'none',score:0,text:'Chưa có phản hồi',engine:'none'};
  const rule = analyzeServiceFeedback(feedback);
  // Chỉ dùng kết quả AI đã lưu khi đúng chính nội dung phản hồi hiện tại; phản hồi tiêu cực rõ bằng luật luôn được ưu tiên.
  if (rule.label !== 'negative' && item?.serviceFeedbackAnalysisText === feedback && String(item?.serviceFeedbackSentimentEngine || '').includes('browser-ai')) {
    const saved = String(item?.serviceFeedbackSentiment || '');
    if (['negative','neutral','positive'].includes(saved)) {
      return {...rule,label:saved,text:saved==='negative'?'Cần xử lý':(saved==='positive'?'Tích cực':'Trung tính'),engine:item.serviceFeedbackSentimentEngine};
    }
  }
  return rule;
}
function serviceCareMeta(item) {
  const rawRating = Math.max(0,Math.min(5,Number(item?.rating)||0));
  const rating = item?.ratingFinalized ? rawRating : 0;
  const sentiment = feedbackSentimentMeta(item);
  const hasFeedback = Boolean(String(item?.serviceFeedback || '').trim());
  const lowRating = rating > 0 && rating <= 2;
  const threeStar = rating === 3;
  const negativeFeedback = hasFeedback && sentiment.label === 'negative';
  const urgent = lowRating || negativeFeedback;
  const needsGentleFollowup = threeStar && !negativeFeedback;
  return {rating,sentiment,hasFeedback,lowRating,threeStar,negativeFeedback,urgent,needsGentleFollowup};
}
function feedbackHandlingStatus(item) {
  const care = serviceCareMeta(item);
  if (!care.urgent) return 'none';
  const status = String(item?.serviceFeedbackHandlingStatus || '').trim();
  return ['new','seen','handling','resolved'].includes(status) ? status : 'new';
}
function feedbackNeedsPriority(item) {
  const care = serviceCareMeta(item);
  return care.urgent && feedbackHandlingStatus(item) !== 'resolved';
}
function feedbackHandlingLabel(status='') {
  return ({new:'Cần xử lý',seen:'Đã xem',handling:'Đang xử lý',resolved:'Đã xử lý'})[status] || 'Cần xử lý';
}
function createRatingCareNotification(appointment) {
  if (!appointment) return null;
  const rating = Math.max(0,Math.min(5,Number(appointment.rating)||0));
  if (!rating || rating > 3) return null;
  const data = notificationStore();
  const id = `rating-care-${appointment.id}`;
  if (data.some(item => item.id === id)) return data.find(item => item.id === id) || null;
  const salonName = salonProfile().name || 'Beauty Moment';
  const pronoun = customerPronounForAppointment(appointment);
  const givenName = customerGivenName(appointment.customerName || '');
  const greetingName = givenName && givenName.toLocaleLowerCase('vi-VN') !== 'bạn' ? ` ${givenName}` : '';
  const isThree = rating === 3;
  const title = isThree ? 'Tiệm đã ghi nhận đánh giá 3 sao của bạn' : 'Tiệm đã ghi nhận đánh giá của bạn';
  const message = isThree
    ? 'Cảm ơn bạn. Tiệm hiểu trải nghiệm lần này có thể vẫn còn điều chưa trọn vẹn và sẽ chủ động xem lại.'
    : 'Đánh giá của bạn đã được chuyển ưu tiên tới Quản lý để kiểm tra và chăm sóc lại trải nghiệm.';
  const content = isThree
    ? `CẢM ƠN ${pronoun.toUpperCase()} ĐÃ ĐÁNH GIÁ\n\nDạ em chào ${pronoun}${greetingName} ạ.\n\n${salonName} cảm ơn ${pronoun} đã dành thời gian đánh giá ${rating} sao cho dịch vụ ${appointment.serviceName || 'tại tiệm'}. Bên em hiểu rằng trải nghiệm lần này có thể vẫn còn một vài điểm chưa thật sự trọn vẹn.\n\nĐánh giá của ${pronoun} đã được ghi nhận để Quản lý và tiệm xem lại chất lượng phục vụ. Nếu thuận tiện, ${pronoun} có thể sử dụng mục “Phản hồi DV” để chia sẻ thêm điều mình chưa hài lòng; mọi góp ý đều giúp bên em cải thiện tốt hơn.\n\nCảm ơn ${pronoun} đã dành thời gian cho ${salonName} ạ.`
    : `ĐÁNH GIÁ CỦA BẠN ĐÃ ĐƯỢC TIẾP NHẬN\n\nDạ em chào ${pronoun}${greetingName} ạ.\n\n${salonName} cảm ơn ${pronoun} đã dành thời gian đánh giá dịch vụ ${appointment.serviceName || 'tại tiệm'}. Bên em rất tiếc vì trải nghiệm lần này chưa mang lại cho ${pronoun} sự hài lòng như mong đợi.\n\nĐánh giá ${rating} sao đã được chuyển vào nhóm ưu tiên để Quản lý kiểm tra lại. Nếu thuận tiện, ${pronoun} có thể chia sẻ thêm tại mục “Phản hồi DV” để bên em hiểu rõ hơn và có cơ hội cải thiện.\n\nCảm ơn ${pronoun} đã giúp ${salonName} phục vụ tốt hơn ạ.`;
  const audioText = isThree
    ? `Dạ em chào ${pronoun}${greetingName} ạ. ${salonName} cảm ơn ${pronoun} đã dành thời gian đánh giá ba sao cho dịch vụ ${appointment.serviceName || 'tại tiệm'}. Bên em hiểu trải nghiệm lần này có thể vẫn còn một vài điểm chưa thật sự trọn vẹn. Đánh giá của ${pronoun} đã được ghi nhận để Quản lý và tiệm xem lại chất lượng phục vụ. Nếu thuận tiện, ${pronoun} có thể chia sẻ thêm ở mục phản hồi dịch vụ để bên em hiểu rõ hơn. Cảm ơn ${pronoun} rất nhiều ạ.`
    : `Dạ em chào ${pronoun}${greetingName} ạ. ${salonName} cảm ơn ${pronoun} đã dành thời gian đánh giá dịch vụ. Bên em rất tiếc vì trải nghiệm lần này chưa mang lại cho ${pronoun} sự hài lòng như mong đợi. Đánh giá của ${pronoun} đã được chuyển vào nhóm ưu tiên để Quản lý kiểm tra lại. Nếu thuận tiện, ${pronoun} có thể chia sẻ thêm ở mục phản hồi dịch vụ để bên em hiểu rõ hơn và có cơ hội cải thiện. Cảm ơn ${pronoun} ạ.`;
  const notification = {
    id, recipientPhone:normalizePhone(appointment.customerPhone), recipientRole:'Khách hàng', appointmentId:appointment.id,
    type:'care', sender:salonName, title, message, content, audioText, voiceStyle:'warm',
    source:isThree?'auto-three-star-care':'auto-low-rating-care', createdAt:new Date().toISOString(), read:false
  };
  data.unshift(notification);
  saveNotificationStore(data);
  return notification;
}
function createManagerRatingAttentionAlert(appointment) {
  if (!appointment) return null;
  const rating = Math.max(0,Math.min(5,Number(appointment.rating)||0));
  if (!rating || rating > 3) return null;
  const data = notificationStore();
  const id = `rating-alert-${appointment.id}`;
  const title = rating <= 2
    ? `Đánh giá thấp cần xử lý: ${appointment.customerName || 'Khách hàng'}`
    : `Đánh giá 3 sao cần quan tâm: ${appointment.customerName || 'Khách hàng'}`;
  const notification = {
    id, recipientPhone:'*', recipientRole:'Quản lý', appointmentId:appointment.id, type:'care-alert',
    sender:appointment.customerName || 'Khách hàng', title,
    message:`${appointment.serviceName || 'Dịch vụ'} • khách vừa xác nhận ${rating}/5 sao${rating <= 2 ? ' và cần được ưu tiên kiểm tra.' : ', nên chủ động theo dõi trải nghiệm.'}`,
    content:`ĐÁNH GIÁ DỊCH VỤ CẦN THEO DÕI\n\nKhách hàng: ${appointment.customerName || '—'}\nSố điện thoại: ${appointment.customerPhone || '—'}\nDịch vụ: ${appointment.serviceName || '—'}\nĐánh giá: ${rating}/5 sao\n\n${rating <= 2 ? 'Đây là mức đánh giá thấp. Lịch đã được đưa vào nhóm ưu tiên để Quản lý kiểm tra.' : 'Ba sao được hệ thống xem là tín hiệu trải nghiệm chưa thật sự trọn vẹn. Khách đã nhận một lời cảm ơn/chăm sóc tự động; Quản lý nên theo dõi nếu có phản hồi bổ sung.'}`,
    source:rating <= 2 ? 'low-rating-alert' : 'three-star-alert', createdAt:new Date().toISOString(), read:false
  };
  const idx=data.findIndex(item=>item.id===id);
  if (idx>=0) data[idx]={...data[idx],...notification,read:false}; else data.unshift(notification);
  saveNotificationStore(data);
  return notification;
}
function createNegativeFeedbackCareNotification(appointment) {
  if (!appointment || !String(appointment.serviceFeedback || '').trim()) return null;
  const data = notificationStore();
  const id = `feedback-care-${appointment.id}`;
  if (data.some(item => item.id === id)) return data.find(item => item.id === id) || null;
  const salonName = salonProfile().name || 'Beauty Moment';
  const pronoun = customerPronounForAppointment(appointment);
  const givenName = customerGivenName(appointment.customerName || '');
  const greetingName = givenName && givenName.toLocaleLowerCase('vi-VN') !== 'bạn' ? ` ${givenName}` : '';
  const notification = {
    id,
    recipientPhone: normalizePhone(appointment.customerPhone),
    recipientRole:'Khách hàng',
    appointmentId:appointment.id,
    type:'care',
    sender:salonName,
    title:'Tiệm đã nhận phản hồi của bạn',
    message:'Phản hồi của bạn đã được ghi nhận và chuyển ưu tiên tới Quản lý để kiểm tra.',
    content:`PHẢN HỒI CỦA BẠN ĐÃ ĐƯỢC TIẾP NHẬN

Dạ em chào ${pronoun}${greetingName} ạ.

${salonName} cảm ơn ${pronoun} đã dành thời gian chia sẻ trải nghiệm sau khi sử dụng dịch vụ ${appointment.serviceName || 'tại tiệm'}. Bên em rất tiếc vì lần trải nghiệm này chưa mang lại cho ${pronoun} cảm giác hài lòng như mong đợi.

Phản hồi của ${pronoun} đã được hệ thống ghi nhận và chuyển vào nhóm ưu tiên để Quản lý kiểm tra lại. Bên em sẽ xem xét kỹ thông tin và cố gắng liên hệ với ${pronoun} sớm nhất có thể.

Cảm ơn ${pronoun} đã giúp ${salonName} có cơ hội nhìn lại và cải thiện chất lượng phục vụ.`,
    audioText:`Dạ em chào ${pronoun}${greetingName} ạ. ${salonName} cảm ơn ${pronoun} đã dành thời gian chia sẻ trải nghiệm. Bên em rất tiếc vì lần sử dụng dịch vụ này chưa mang lại cho ${pronoun} cảm giác hài lòng như mong đợi. Phản hồi của ${pronoun} đã được ghi nhận và chuyển ưu tiên đến Quản lý để kiểm tra lại. Bên em sẽ xem xét kỹ và cố gắng liên hệ với ${pronoun} sớm nhất có thể. Cảm ơn ${pronoun} đã giúp ${salonName} có cơ hội cải thiện và phục vụ tốt hơn ạ.`,
    voiceStyle:'warm',
    source:'auto-negative-feedback-care',
    createdAt:new Date().toISOString(),
    read:false
  };
  data.unshift(notification);
  saveNotificationStore(data);
  return notification;
}
function createManagerNegativeFeedbackAlert(appointment) {
  if (!appointment) return null;
  const data = notificationStore();
  const id = `feedback-alert-${appointment.id}`;
  const sentiment = feedbackSentimentMeta(appointment);
  const notification = {
    id,
    recipientPhone:'*',
    recipientRole:'Quản lý',
    appointmentId:appointment.id,
    type:'care-alert',
    sender:appointment.customerName || 'Khách hàng',
    title:`Cần xử lý phản hồi: ${appointment.customerName || 'Khách hàng'}`,
    message:`${appointment.serviceName || 'Dịch vụ'} • phản hồi tiêu cực cần được ưu tiên kiểm tra.`,
    content:`PHẢN HỒI DỊCH VỤ CẦN XỬ LÝ

Khách hàng: ${appointment.customerName || '—'}
Số điện thoại: ${appointment.customerPhone || '—'}
Dịch vụ: ${appointment.serviceName || '—'}
Đánh giá: ${appointment.rating ? `${appointment.rating}/5 sao` : 'Chưa chấm sao'}
Mức nhận diện: ${sentiment.text}

Nội dung phản hồi:
${appointment.serviceFeedback || ''}

Lịch này đã được đưa lên đầu bảng “Lịch khách hàng” cho đến khi Quản lý đánh dấu “Đã xử lý”.`,
    source:'negative-feedback-alert',
    createdAt:new Date().toISOString(),
    read:false
  };
  const idx = data.findIndex(item => item.id === id);
  if (idx >= 0) data[idx] = {...data[idx], ...notification, read:false};
  else data.unshift(notification);
  saveNotificationStore(data);
  return notification;
}
function updateFeedbackHandlingStatus(appointmentId, status) {
  const allowed = ['new','seen','handling','resolved'];
  if (!allowed.includes(status)) return;
  const data = appointmentStore();
  const idx = data.findIndex(item => item.id === appointmentId);
  if (idx < 0) return;
  const now = new Date().toISOString();
  data[idx] = {
    ...data[idx],
    serviceFeedbackHandlingStatus:status,
    serviceFeedbackHandlingUpdatedAt:now,
    ...(status === 'resolved' ? {serviceFeedbackResolvedAt:now} : {})
  };
  saveAppointmentStore(data);
  renderMySchedule();
  renderManagerCustomerPanel?.();
  showToast(status === 'resolved' ? 'Đã đánh dấu phản hồi là đã xử lý.' : `Đã chuyển phản hồi sang “${feedbackHandlingLabel(status)}”.`);
}
function openServiceFeedbackModal(appointmentId) {
  const item = appointmentStore().find(appt => appt.id === appointmentId);
  if (!item || !appointmentIsAccepted(item.status)) {
    showToast('Phản hồi dịch vụ khả dụng sau khi tiệm đã nhận lịch.');
    return;
  }
  serviceFeedbackAppointmentId = item.id;
  if (serviceFeedbackServiceLabel) serviceFeedbackServiceLabel.textContent = item.serviceName || 'Dịch vụ tại tiệm';
  if (serviceFeedbackText) serviceFeedbackText.value = item.serviceFeedback || '';
  if (serviceFeedbackCount) serviceFeedbackCount.textContent = `${String(item.serviceFeedback || '').length}/1200 ký tự`;
  if (serviceFeedbackSavedState) {
    serviceFeedbackSavedState.textContent = item.serviceFeedback ? 'Đã có phản hồi • bạn có thể cập nhật lại' : 'Không bắt buộc';
  }
  serviceFeedbackBackdrop?.classList.add('open');
  serviceFeedbackBackdrop?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  setTimeout(()=>serviceFeedbackText?.focus(),30);
}
function closeServiceFeedbackModal() {
  if (!serviceFeedbackBackdrop) return;
  serviceFeedbackBackdrop.classList.remove('open');
  serviceFeedbackBackdrop.setAttribute('aria-hidden','true');
  serviceFeedbackAppointmentId = null;
  document.body.style.overflow = myScheduleBackdrop?.classList.contains('open') ? 'hidden' : '';
}
async function saveServiceFeedback() {
  if (!serviceFeedbackAppointmentId) return;
  const value = String(serviceFeedbackText?.value || '').trim();
  if (!value) {
    showToast('Bạn chưa nhập nội dung phản hồi. Phần này không bắt buộc nên có thể bấm Đóng nếu không muốn gửi.');
    serviceFeedbackText?.focus();
    return;
  }
  const before = appointmentStore().find(item => item.id === serviceFeedbackAppointmentId);
  if (!before) return;
  if (saveServiceFeedbackBtn) {
    saveServiceFeedbackBtn.disabled=true;
    saveServiceFeedbackBtn.textContent='Đang phân tích phản hồi…';
  }
  const sentiment = await analyzeServiceFeedbackSmart(value);
  const now = new Date().toISOString();
  const rating = before?.ratingFinalized ? Math.max(0,Math.min(5,Number(before?.rating)||0)) : 0;
  // Quy tắc kinh doanh: 1–2★ luôn là mức cần xử lý; 3★ + phản hồi tiêu cực cũng phải ưu tiên.
  // Phản hồi tiêu cực rõ ràng luôn ưu tiên dù khách chấm 4–5★.
  const urgent = rating > 0 && rating <= 2 || sentiment.label === 'negative';
  const nextHandling = urgent
    ? (before?.serviceFeedbackHandlingStatus === 'resolved' ? 'new' : (before?.serviceFeedbackHandlingStatus || 'new'))
    : 'none';
  saveAppointmentPatch(serviceFeedbackAppointmentId,{
    serviceFeedback:value,
    serviceFeedbackAt:now,
    serviceFeedbackSentiment:sentiment.label,
    serviceFeedbackSentimentScore:sentiment.score,
    serviceFeedbackSentimentEngine:sentiment.engine || 'rules-v55',
    serviceFeedbackAnalysisText:value,
    serviceFeedbackHandlingStatus:nextHandling,
    serviceFeedbackHandlingUpdatedAt:urgent ? now : null,
    ...(urgent && before?.serviceFeedbackHandlingStatus === 'resolved' ? {serviceFeedbackResolvedAt:null} : {})
  });
  const saved = appointmentStore().find(item => item.id === serviceFeedbackAppointmentId);
  if (urgent && saved) {
    if (sentiment.label === 'negative') {
      createManagerNegativeFeedbackAlert(saved);
      if (!before?.serviceFeedbackCareNotifiedAt) {
        createNegativeFeedbackCareNotification(saved);
        saveAppointmentPatch(saved.id,{serviceFeedbackCareNotifiedAt:now});
      }
    } else if (rating > 0 && rating <= 2) {
      createManagerRatingAttentionAlert(saved);
    }
  }
  if (saveServiceFeedbackBtn) {
    saveServiceFeedbackBtn.disabled=false;
    saveServiceFeedbackBtn.textContent='Gửi phản hồi →';
  }
  closeServiceFeedbackModal();
  renderMySchedule();
  renderNotifications();
  showToast(urgent ? 'Tiệm đã ghi nhận phản hồi và chuyển ưu tiên tới Quản lý.' : (rating===3 ? 'Cảm ơn bạn. Đánh giá 3 sao đã được tiệm ghi nhận để theo dõi thêm.' : 'Cảm ơn bạn đã gửi phản hồi cho tiệm.'));
}
function rateAppointment(appointmentId, rating) {
  const item = appointmentStore().find(appt => appt.id === appointmentId);
  if (!item || !appointmentIsAccepted(item.status)) {
    showToast('Bạn chỉ có thể đánh giá sau khi Chủ tiệm xác nhận lịch.');
    return;
  }
  if (item.ratingFinalized) {
    showToast('Đánh giá này đã được xác nhận và không thể thay đổi.');
    return;
  }
  if (!item.serviceStaffName) {
    showToast('Vui lòng chọn “NV phục vụ” trước khi chấm sao.');
    openStaffSelectModal(appointmentId);
    return;
  }
  const safeRating = Math.max(1, Math.min(5, Number(rating) || 0));
  saveAppointmentPatch(appointmentId, {
    rating:safeRating,
    ratingAt:new Date().toISOString(),
    ratingStaffName:item.serviceStaffName,
    ratingFinalized:false,
    ratingFinalizedAt:null
  });
  renderMySchedule();
  showToast(`Bạn đang chọn ${safeRating}/5 sao cho ${item.serviceStaffName}. Hãy tích xác nhận để hoàn tất đánh giá.`);
}
function finalizeAppointmentRating(appointmentId) {
  const item = appointmentStore().find(appt => appt.id === appointmentId);
  if (!item || !appointmentIsAccepted(item.status)) {
    showToast('Lịch chưa đủ điều kiện để xác nhận đánh giá.');
    renderMySchedule();
    return;
  }
  if (item.ratingFinalized) {
    renderMySchedule();
    return;
  }
  const rating = Math.max(0,Math.min(5,Number(item.rating)||0));
  if (!item.serviceStaffName || !rating) {
    showToast('Vui lòng chọn nhân viên phục vụ và chấm sao trước khi xác nhận.');
    renderMySchedule();
    return;
  }
  const now = new Date().toISOString();
  const lowRating = rating <= 2;
  saveAppointmentPatch(appointmentId,{
    ratingFinalized:true,
    ratingFinalizedAt:now,
    ratingStaffName:item.serviceStaffName,
    ratingStaffId:item.serviceStaffId || null,
    ...(lowRating ? {
      serviceFeedbackHandlingStatus:item.serviceFeedbackHandlingStatus === 'resolved' ? 'new' : (item.serviceFeedbackHandlingStatus || 'new'),
      serviceFeedbackHandlingUpdatedAt:now,
      serviceFeedbackResolvedAt:null
    } : {})
  });
  const saved = appointmentStore().find(appt => appt.id === appointmentId);
  if (saved && rating <= 3) {
    createRatingCareNotification(saved);
    createManagerRatingAttentionAlert(saved);
  }
  renderMySchedule();
  renderNotifications();
  showToast(rating <= 3
    ? `Đã xác nhận ${rating}/5 sao. Tiệm đã tự ghi nhận để theo dõi trải nghiệm này.`
    : 'Đã xác nhận đánh giá. Số sao và nhân viên phục vụ của đánh giá này đã được khóa.');
}

function editAppointment(appointmentId) {
  const item = appointmentStore().find(appt => appt.id === appointmentId);
  if (!item) { showToast('Không tìm thấy lịch hẹn cần đổi.'); return; }
  closeMyScheduleModal();
  openBookingModal(item.serviceId || 'nail-care');
  editingAppointmentId = item.id;
  $('bookingModalTitle').textContent = 'Đổi lịch hẹn';
  const start = new Date(item.startAt);
  if (!Number.isNaN(start.getTime())) {
    const yyyy = start.getFullYear();
    const mm = String(start.getMonth()+1).padStart(2,'0');
    const dd = String(start.getDate()).padStart(2,'0');
    $('bookingDate').value = `${yyyy}-${mm}-${dd}`;
    $('bookingTime').value = start.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false});
  }
  $('bookingNote').value = item.note || '';
  if (item.nailSample && $('bookingNailSample')) {
    $('bookingNailSample').value = item.nailSample;
    $('bookingNailSampleName').textContent = item.nailSample;
    const card = nailSampleCards.find(c => `${c.dataset.nailCode} — ${c.dataset.nailName}` === item.nailSample);
    if (card && $('bookingNailThumb')) { $('bookingNailThumb').src = card.dataset.nailImage || ''; $('bookingNailThumb').hidden = false; }
  }
  updateBookingSummary();
}
function cancelAppointment(appointmentId) {
  const data = appointmentStore();
  const item = data.find(appt => appt.id === appointmentId);
  if (!item) return;
  if (item.serviceStaffId && appointmentIsAccepted(item.status)) {
    const assignedStaff=staffStore().find(row=>row.id===item.serviceStaffId);
    if (assignedStaff) createStaffAssignmentNotificationV59(item,assignedStaff,'cancelled');
  }
  const next = data.filter(appt => appt.id !== appointmentId);
  saveAppointmentStore(next);
  renderMySchedule();
  updateBookingSummary();
  showToast('Đã hủy lịch hẹn.');
}

function customerScheduleArchiveInfoV61(item, now=new Date()) {
  if (!item?.completed) return { hidden:false, reason:'active', cutoff:null };
  const completedAt = new Date(item.completedAt || 0);
  if (Number.isNaN(completedAt.getTime())) return { hidden:false, reason:'completed-missing-time', cutoff:null };
  const ratingFinalized = Boolean(item.ratingFinalized);
  const base = ratingFinalized
    ? new Date(item.ratingFinalizedAt || completedAt)
    : completedAt;
  if (Number.isNaN(base.getTime())) return { hidden:false, reason:'completed-missing-time', cutoff:null };
  const cutoff = new Date(base);
  cutoff.setHours(cutoff.getHours() + (ratingFinalized ? 24 : 48));
  return {
    hidden: now.getTime() >= cutoff.getTime(),
    reason: ratingFinalized ? 'finalized-expired' : 'unrated-expired',
    cutoff
  };
}
function customerScheduleArchiveLabelV61(item, now=new Date()) {
  const info = customerScheduleArchiveInfoV61(item, now);
  if (!info.hidden) return '';
  return info.reason === 'unrated-expired' ? 'Đã ẩn sau 48 giờ • chưa chốt đánh giá' : 'Đã ẩn sau 24 giờ • đã chốt đánh giá';
}
function customerScheduleVisibleItemsV61(items, now=new Date()) {
  return items.filter(item => !customerScheduleArchiveInfoV61(item, now).hidden);
}
function customerScheduleHiddenItemsV61(items, now=new Date()) {
  return items.filter(item => customerScheduleArchiveInfoV61(item, now).hidden);
}
function customerScheduleSortV61(a,b) {
  const group = item => {
    if (!item.completed) return 0; // lịch mới/đang theo dõi luôn ở đầu
    if (!item.ratingFinalized) return 1; // đã xong nhưng khách chưa chốt đánh giá
    return 2; // đã chốt đánh giá, còn trong 24h
  };
  const ga=group(a), gb=group(b);
  if (ga !== gb) return ga-gb;
  if (ga === 0) return new Date(b.createdAt || b.startAt || 0) - new Date(a.createdAt || a.startAt || 0);
  if (ga === 1) return new Date(b.completedAt || b.startAt || 0) - new Date(a.completedAt || a.startAt || 0);
  return new Date(b.ratingFinalizedAt || b.completedAt || b.startAt || 0) - new Date(a.ratingFinalizedAt || a.completedAt || a.startAt || 0);
}
function customerScheduleGroupHeadingV61(items, mode='active') {
  if (mode === 'archived') return '<div class="customer-schedule-section-head archived"><span>▣</span><div><small>LỊCH ĐÃ ẨN</small><strong>Kho lịch vẫn còn để bạn mở lại khi cần</strong></div></div>';
  const groups = [];
  if (items.some(item => !item.completed)) groups.push('<div class="customer-schedule-section-head"><span>✦</span><div><small>LỊCH ĐANG THEO DÕI</small><strong>Lịch mới đặt và các lịch sắp tới</strong></div></div>');
  if (items.some(item => item.completed && !item.ratingFinalized)) groups.push('<div class="customer-schedule-section-head"><span>★</span><div><small>CHỜ BẠN ĐÁNH GIÁ</small><strong>Lịch đã hoàn thành nhưng chưa chốt đánh giá</strong></div></div>');
  if (items.some(item => item.completed && item.ratingFinalized)) groups.push('<div class="customer-schedule-section-head"><span>✓</span><div><small>ĐÃ CHỐT ĐÁNH GIÁ</small><strong>Lịch còn hiển thị trong 24 giờ sau khi chốt</strong></div></div>');
  return groups.join('');
}
function renderCustomerSchedule(session) {
  $('myScheduleTitle').textContent = 'Lịch hẹn của bạn';
  myScheduleAccount.textContent = `${session.name} • ${session.phone}`;
  const phone = normalizePhone(session.phone);
  const allItems = appointmentStore()
    .filter(item => normalizePhone(item.customerPhone || '') === phone)
    .filter(item => !appointmentIsDeclined(item.status));
  const now = new Date();
  const visibleItems = customerScheduleVisibleItemsV61(allItems, now).sort(customerScheduleSortV61);
  const hiddenItems = customerScheduleHiddenItemsV61(allItems, now).sort((a,b) => {
    const ai=customerScheduleArchiveInfoV61(a,now), bi=customerScheduleArchiveInfoV61(b,now);
    return (bi.cutoff?.getTime()||0)-(ai.cutoff?.getTime()||0);
  });
  const hiddenUnratedCount = hiddenItems.filter(item => !item.ratingFinalized).length;
  const hiddenFinalizedCount = hiddenItems.filter(item => item.ratingFinalized).length;
  const renderToolbar = () => {
    if (!myScheduleToolbar) return;
    myScheduleToolbar.innerHTML = `
      <div class="customer-schedule-toolbar-copy">
        <span>LUỒNG HIỂN THỊ LỊCH</span>
        <strong>${customerScheduleShowArchivedV61 ? 'Đang xem lịch đã ẩn' : 'Lịch cần quan tâm được đưa lên trước'}</strong>
        <small>${customerScheduleShowArchivedV61 ? 'Lịch đã ẩn vẫn được giữ nguyên trong dữ liệu hệ thống. Bạn có thể mở lại lịch chưa chốt để đánh giá.' : 'Lịch mới/đang theo dõi ở đầu • lịch đã xong chưa đánh giá ở sau • lịch đã chốt sẽ tự ẩn đúng hạn.'}</small>
      </div>
      <button type="button" class="customer-schedule-archive-btn" data-customer-schedule-archive-toggle>
        ${customerScheduleShowArchivedV61 ? '← Quay lại lịch đang hiển thị' : `▣ Lịch đã ẩn (${hiddenItems.length})`}
      </button>`;
    myScheduleToolbar.querySelector('[data-customer-schedule-archive-toggle]')?.addEventListener('click', () => {
      customerScheduleShowArchivedV61 = !customerScheduleShowArchivedV61;
      renderMySchedule();
    });
  };
  renderToolbar();
  const items = customerScheduleShowArchivedV61 ? hiddenItems : visibleItems;
  if (!items.length) {
    myScheduleList.innerHTML = customerScheduleShowArchivedV61
      ? `<div class="schedule-empty customer-schedule-archived-empty">
          <div class="schedule-empty-icon">✓</div>
          <strong>Chưa có lịch nào được ẩn</strong>
          <p>Các lịch đã hoàn thành sẽ chỉ được ẩn khỏi giao diện theo đúng mốc thời gian; dữ liệu lịch sử không bị xóa.</p>
          <button class="ghost-btn" type="button" data-customer-schedule-back>← Quay lại lịch đang hiển thị</button>
        </div>`
      : `<div class="schedule-empty">
          <div class="schedule-empty-icon">♡</div>
          <strong>Bạn chưa có lịch hẹn</strong>
          <p>Hãy tạo lịch hẹn đầu tiên của bạn. Sau khi đặt lịch, các lịch đã đặt sẽ tự động xuất hiện tại đây.</p>
          <button class="primary-btn" id="scheduleBookNowBtn" type="button">Đặt lịch ngay →</button>
        </div>`;
    const btn = $('scheduleBookNowBtn');
    if (btn) btn.addEventListener('click', () => { closeMyScheduleModal(); openBookingModal(); });
    myScheduleList.querySelector('[data-customer-schedule-back]')?.addEventListener('click', () => { customerScheduleShowArchivedV61=false; renderMySchedule(); });
    return;
  }
  const renderItem = item => {
    const d = new Date(item.startAt);
    const date = Number.isNaN(d.getTime()) ? '--/--' : d.toLocaleDateString('vi-VN', {day:'2-digit',month:'2-digit'});
    const time = Number.isNaN(d.getTime()) ? '' : d.toLocaleTimeString('vi-VN', {hour:'2-digit',minute:'2-digit'});
    const accepted = appointmentIsAccepted(item.status);
    const rating = Math.max(0, Math.min(5, Number(item.rating) || 0));
    const ratingFinalized = Boolean(item.ratingFinalized);
    const canRate = accepted && !ratingFinalized;
    const staffLine = item.serviceStaffName ? `<span class="schedule-staff-line">NV phục vụ: <b>${escapeUiText(item.serviceStaffName)}</b></span>` : '';
    const staffButton = !ratingFinalized
      ? `<button class="schedule-action-btn staff" type="button" data-select-service-staff="${escapeUiText(item.id)}">NV phục vụ</button>`
      : `<button class="schedule-action-btn staff is-locked" type="button" disabled title="Đánh giá đã được xác nhận">NV phục vụ</button>`;
    const feedbackButton = accepted
      ? `<button class="schedule-action-btn service-feedback-btn ${item.serviceFeedback ? 'has-feedback' : ''}" type="button" data-service-feedback="${escapeUiText(item.id)}">${item.serviceFeedback ? 'Phản hồi DV ✓' : 'Phản hồi DV'}</button>`
      : '';
    const stars = [1,2,3,4,5].map(star => `<button class="schedule-star ${canRate ? 'enabled' : 'disabled'} ${star <= rating ? 'filled' : ''}" type="button" data-rate-appointment="${escapeUiText(item.id)}" data-rating="${star}" ${canRate ? '' : 'disabled'} aria-label="Đánh giá ${star} sao">★</button>`).join('');
    const statusText = item.completed ? 'Đã hoàn thành' : (item.status || 'Chờ xác nhận');
    const statusClass = item.completed ? 'status-accepted' : appointmentStatusClass(statusText);
    const archiveLabel = customerScheduleShowArchivedV61 ? customerScheduleArchiveLabelV61(item, now) : '';
    const ratingText = !accepted
      ? 'Chờ xác nhận'
      : ratingFinalized
        ? `Đã xác nhận ${rating}/5 sao`
        : (rating ? `${rating}/5 sao • tích ✓ để chốt` : (item.serviceStaffName ? 'Chọn số sao' : 'Chọn NV trước'));
    const ratingConfirmDisabled = !accepted || !rating || !item.serviceStaffName || ratingFinalized;
    const ratingConfirm = accepted ? `
      <label class="schedule-rating-confirm ${ratingFinalized ? 'is-finalized' : ''} ${ratingConfirmDisabled && !ratingFinalized ? 'is-disabled' : ''}" title="${ratingFinalized ? 'Đánh giá đã được khóa' : 'Xác nhận hoàn tất đánh giá'}">
        <input type="checkbox" data-finalize-rating="${escapeUiText(item.id)}" ${ratingFinalized ? 'checked disabled' : (ratingConfirmDisabled ? 'disabled' : '')}>
        <span class="schedule-rating-check">✓</span>
        <em>${ratingFinalized ? 'Đã chốt' : 'Xác nhận'}</em>
      </label>` : '';
    return `<article class="schedule-item ${ratingFinalized ? 'rating-finalized' : ''} ${item.completed ? 'is-completed' : ''} ${customerScheduleShowArchivedV61 ? 'is-archived-customer' : ''}">
      <div class="schedule-item-date"><b>${date}</b><small>${time}</small></div>
      <div class="schedule-item-main">
        <strong>${escapeUiText(item.serviceName || 'Dịch vụ tại tiệm')}</strong>
        <span>${item.nailSample ? `Mẫu móng: ${escapeUiText(item.nailSample)}` : 'Tiệm sẽ sắp xếp nhân viên phù hợp'}</span>
        ${staffLine}
        ${archiveLabel ? `<small class="customer-schedule-archive-note">${escapeUiText(archiveLabel)}</small>` : ''}
      </div>
      <div class="schedule-item-side">
        <span class="schedule-status ${statusClass}">${escapeUiText(statusText)}</span>
        <div class="schedule-actions">${staffButton}${feedbackButton}${!item.completed ? `<button class="schedule-action-btn" type="button" data-edit-appointment="${escapeUiText(item.id)}">Đổi lịch</button><button class="schedule-action-btn cancel" type="button" data-cancel-appointment="${escapeUiText(item.id)}">Hủy lịch</button>` : ''}</div>
      </div>
      <div class="schedule-feedback">
        <span class="schedule-feedback-label">Đánh giá</span>
        <span class="schedule-stars">${stars}</span>
        <span class="schedule-rating-text">${ratingText}</span>
        ${ratingConfirm}
      </div>
    </article>`;
  };
  // Chèn tiêu đề nhóm đúng theo thứ tự nghiệp vụ, thay vì chỉ đảo mảng bằng thời gian.
  const grouped=[];
  if (!customerScheduleShowArchivedV61) {
    const active=items.filter(item=>!item.completed), unrated=items.filter(item=>item.completed&&!item.ratingFinalized), finalized=items.filter(item=>item.completed&&item.ratingFinalized);
    if (active.length) grouped.push(customerScheduleGroupHeadingV61(active), active.map(renderItem).join(''));
    if (unrated.length) grouped.push(customerScheduleGroupHeadingV61(unrated), unrated.map(renderItem).join(''));
    if (finalized.length) grouped.push(customerScheduleGroupHeadingV61(finalized), finalized.map(renderItem).join(''));
  } else {
    grouped.push(customerScheduleGroupHeadingV61(items,'archived'), items.map(renderItem).join(''));
  }
  myScheduleList.innerHTML = grouped.join('');
  $$('[data-edit-appointment]').forEach(btn => btn.addEventListener('click', () => editAppointment(btn.dataset.editAppointment)));
  $$('[data-cancel-appointment]').forEach(btn => btn.addEventListener('click', () => cancelAppointment(btn.dataset.cancelAppointment)));
  $$('[data-select-service-staff]').forEach(btn => btn.addEventListener('click', () => openStaffSelectModal(btn.dataset.selectServiceStaff)));
  $$('[data-service-feedback]').forEach(btn => btn.addEventListener('click', () => openServiceFeedbackModal(btn.dataset.serviceFeedback)));
  $$('[data-rate-appointment]').forEach(btn => btn.addEventListener('click', () => rateAppointment(btn.dataset.rateAppointment, btn.dataset.rating)));
  $$('[data-finalize-rating]').forEach(input => input.addEventListener('change', () => {
    if (input.checked) finalizeAppointmentRating(input.dataset.finalizeRating);
    else renderMySchedule();
  }));
}

function managerAppointmentDecision(appointmentId, decision) {
  const item = appointmentStore().find(appt => appt.id === appointmentId);
  if (!item) { showToast('Không tìm thấy lịch cần xử lý.'); return; }
  const accepted = decision === 'accept';
  const hasCustomerAccount = Boolean(item.customerHasAccount || customerAccountByPhone(item.customerPhone));

  // Lịch của khách vãng lai không có tài khoản: Quản lý có thể khôi phục trực tiếp,
  // không tạo lời mời xác nhận lại vì khách không có chuông/app để nhận.
  if (accepted && appointmentIsDeclined(item.status) && !hasCustomerAccount) {
    const freeTable = freeTableForAppointment(item);
    if (!freeTable) {
      showToast('Khung giờ này hiện chưa còn chỗ trống để khôi phục lịch khách vãng lai.');
      const session = getSession();
      if (session?.role === 'Quản lý') renderManagerSchedule(session);
      return;
    }
    const updated = saveAppointmentPatch(appointmentId,{
      status:'Đã nhận lịch', tableNumber:freeTable, confirmedAt:new Date().toISOString(), rejectedAt:null,
      completed:false, completedAt:null, reofferStatus:null, reofferToken:null, managerDecisionAt:new Date().toISOString(),
      managerArchiveState:null, managerArchiveReason:null, managerArchivedAt:null
    });
    const session=getSession(); if(session?.role==='Quản lý') renderManagerSchedule(session);
    showToast(`Đã khôi phục trực tiếp lịch của ${updated?.customerName || item.customerName}.`);
    return;
  }

  // Vision 33: nếu lịch từng bị từ chối mà Quản lý đổi sang Đồng ý,
  // với khách có tài khoản thì không khôi phục ngay. Hệ thống gửi lời mời để Khách xác nhận lại.
  if (accepted && appointmentIsDeclined(item.status)) {
    const freeTable = freeTableForAppointment(item);
    if (!freeTable) {
      showToast('Khung giờ này hiện chưa còn chỗ trống để gửi lời mời xác nhận lại.');
      const session = getSession();
      if (session?.role === 'Quản lý') renderManagerSchedule(session);
      return;
    }
    const updated = saveAppointmentPatch(appointmentId, {
      tableNumber:freeTable,
      managerDecisionAt:new Date().toISOString()
    });
    createReofferNotification(updated || item);
    const session = getSession();
    if (session?.role === 'Quản lý') renderManagerSchedule(session);
    renderNotifications();
    showToast(`Đã gửi lời mời xác nhận lại cho ${item.customerName}. Lịch chỉ được khôi phục khi khách bấm Xác nhận.`);
    return;
  }

  if (accepted) {
    if (item.serviceStaffId) {
      const staffCheck = validateAssignedStaffV60(item);
      if (!staffCheck.available) {
        const conflict = staffCheck.conflicts?.[0];
        showToast(conflict ? `Không thể nhận lịch: ${item.serviceStaffName || 'Nhân viên'} đang trùng lịch ${conflict.displayTime || ''}–${conflict.displayEndTime || ''}. Hãy chọn nhân viên khác.` : 'Nhân viên đã chọn hiện không khả dụng. Hãy chọn nhân viên khác.');
        const session=getSession(); if(session?.role==='Quản lý') renderManagerSchedule(session);
        return;
      }
    }
    const freeTable = freeTableForAppointment(item);
    if (!freeTable) {
      showToast('Khung giờ này hiện không còn bàn trống để xác nhận lịch.');
      const session = getSession();
      if (session?.role === 'Quản lý') renderManagerSchedule(session);
      return;
    }
    removeReofferNotificationsForAppointment(item.id);
    const updated = saveAppointmentPatch(appointmentId, {
      status:'Đã nhận lịch',
      tableNumber:freeTable,
      confirmedAt:new Date().toISOString(),
      rejectedAt:null,
      completed:false,
      completedAt:null,
      reofferStatus:null,
      reofferToken:null,
      managerDecisionAt:new Date().toISOString(),
      managerArchiveState:null, managerArchiveReason:null, managerArchivedAt:null
    });
    if (!updated) return;
    if (hasCustomerAccount) createCustomerDecisionNotification(updated, 'accept');
    if (updated.serviceStaffId) {
      const assignedStaff = staffStore().find(row=>row.id===updated.serviceStaffId);
      if (assignedStaff) createStaffAssignmentNotificationV59(updated, assignedStaff, 'assigned');
    }
    invalidateUnavailableReoffers();
    const session = getSession();
    if (session?.role === 'Quản lý') renderManagerSchedule(session);
    renderNotifications();
    showToast(`Đã đồng ý lịch của ${updated.customerName}.`);
    return;
  }

  removeReofferNotificationsForAppointment(item.id);
  const previousAssignedStaff = item.serviceStaffId ? staffStore().find(row=>row.id===item.serviceStaffId) : null;
  const wasAcceptedBeforeReject = appointmentIsAccepted(item.status);
  const updated = saveAppointmentPatch(appointmentId, {
    status:'Từ chối',
    rejectedAt:new Date().toISOString(),
    confirmedAt:null,
    completed:false,
    completedAt:null,
    reofferStatus:null,
    reofferToken:null,
    serviceStaffId:'', serviceStaffName:'', staffWorkStatus:'scheduled', staffStartedAt:null, staffServiceDoneAt:null,
    managerDecisionAt:new Date().toISOString(),
    managerArchiveState:null, managerArchiveReason:null, managerArchivedAt:null
  });
  if (!updated) return;
  if (hasCustomerAccount) createCustomerDecisionNotification(updated, 'decline');
  if (wasAcceptedBeforeReject && previousAssignedStaff) createStaffAssignmentNotificationV59(item, previousAssignedStaff, 'removed');
  const session = getSession();
  if (session?.role === 'Quản lý') renderManagerSchedule(session);
  renderNotifications();
  showToast(`Đã từ chối lịch của ${updated.customerName}.`);
}
function managerAppointmentComplete(appointmentId, shouldComplete=true) {
  const item = appointmentStore().find(appt => appt.id === appointmentId);
  if (!item) { showToast('Không tìm thấy lịch cần cập nhật.'); return; }
  if (!appointmentIsAccepted(item.status)) {
    showToast('Cần Đồng ý nhận lịch trước khi đánh dấu Hoàn thành.');
    const session = getSession();
    if (session?.role === 'Quản lý') renderManagerSchedule(session);
    return;
  }
  const updated = saveAppointmentPatch(appointmentId, shouldComplete
    ? { completed:true, completedAt:new Date().toISOString() }
    : { completed:false, completedAt:null }
  );
  if (!updated) return;
  const session = getSession();
  if (session?.role === 'Quản lý') renderManagerSchedule(session);
  showToast(shouldComplete ? `Đã đánh dấu hoàn thành lịch của ${updated.customerName}.` : `Đã bỏ trạng thái hoàn thành của ${updated.customerName}.`);
  if (document.querySelector('[data-manager-finance-view="revenue"]')?.classList.contains('is-active')) revenueRenderDashboard();
}
function customerAccountByPhone(phone='') {
  const normalized = normalizePhone(phone || '');
  if (!normalized) return null;
  try {
    return Object.values(accounts()).find(acc => acc?.role === 'Khách hàng' && normalizePhone(acc.phone || '') === normalized) || null;
  } catch { return null; }
}
function managerCustomerAddress(item) {
  if (item.customerAddress) return item.customerAddress;
  return customerAccountByPhone(item.customerPhone)?.address || '—';
}
function managerCustomerGender(item) {
  if (item.customerGender) return item.customerGender;
  return customerAccountByPhone(item.customerPhone)?.gender || '—';
}
function customerGivenName(fullName='') {
  const parts = String(fullName || '').trim().split(/\s+/).filter(Boolean);
  const raw = parts.at(-1) || 'bạn';
  return raw.charAt(0).toLocaleUpperCase('vi-VN') + raw.slice(1).toLocaleLowerCase('vi-VN');
}
function normalizeCustomerGender(value='') {
  const normalized = String(value || '').trim().toLocaleLowerCase('vi-VN');
  if (normalized === 'nam') return 'Nam';
  if (normalized === 'nữ' || normalized === 'nu') return 'Nữ';
  return '';
}
function customerPronounForAppointment(appointment) {
  const account = customerAccountByPhone(appointment?.customerPhone || '');
  const gender = normalizeCustomerGender(appointment?.customerGender || account?.gender || '');
  return gender === 'Nam' ? 'anh' : gender === 'Nữ' ? 'chị' : 'bạn';
}

function appointmentIsReofferPending(item) {
  return Boolean(item && item.reofferStatus === 'pending' && item.reofferToken);
}
function freeTableForAppointment(target, data=appointmentStore()) {
  const cfg = serviceTableConfig(target?.serviceId || '');
  if (!cfg.tables) return null;
  const start = new Date(target?.startAt || 0);
  const end = appointmentEndDate(target || {});
  if (Number.isNaN(start.getTime()) || !end) return null;
  const occupied = new Set();
  const overlaps = data
    .filter(item => item.id !== target.id && item.serviceId === target.serviceId && !appointmentIsDeclined(item.status))
    .filter(item => {
      const otherStart = new Date(item.startAt || 0);
      const otherEnd = appointmentEndDate(item);
      return !Number.isNaN(otherStart.getTime()) && otherEnd && intervalsOverlap(start, end, otherStart, otherEnd);
    })
    .sort((a,b) => new Date(a.startAt || 0) - new Date(b.startAt || 0));
  overlaps.forEach(item => {
    let table = Number(item.tableNumber);
    if (!(table >= 1 && table <= cfg.tables) || occupied.has(table)) {
      table = Array.from({length:cfg.tables},(_,i)=>i+1).find(n => !occupied.has(n));
    }
    if (table) occupied.add(table);
  });
  const preferred = Number(target.tableNumber);
  if (preferred >= 1 && preferred <= cfg.tables && !occupied.has(preferred)) return preferred;
  return Array.from({length:cfg.tables},(_,i)=>i+1).find(n => !occupied.has(n)) || null;
}
function removeReofferNotificationsForAppointment(appointmentId) {
  const before = notificationStore();
  const after = before.filter(item => !(item.actionType === 'reoffer-confirm' && item.appointmentId === appointmentId));
  if (after.length !== before.length) saveNotificationStore(after);
}
function invalidateReofferAppointment(appointmentId, reason='slot-taken') {
  const data = appointmentStore();
  const idx = data.findIndex(item => item.id === appointmentId);
  if (idx < 0) return false;
  const item = data[idx];
  if (!appointmentIsReofferPending(item)) return false;
  data[idx] = {
    ...item,
    reofferStatus:'invalidated',
    reofferInvalidatedAt:new Date().toISOString(),
    reofferInvalidatedReason:reason,
    reofferToken:null
  };
  saveAppointmentStore(data);
  removeReofferNotificationsForAppointment(appointmentId);
  return true;
}
function invalidateUnavailableReoffers() {
  const data = appointmentStore();
  const pending = data.filter(appointmentIsReofferPending);
  let changed = false;
  const notifications = notificationStore();
  const invalidIds = [];
  pending.forEach(item => {
    const freshData = data.map(x => x.id === item.id ? {...x, status:'Từ chối'} : x);
    const free = freeTableForAppointment(item, freshData);
    if (!free) {
      const idx = data.findIndex(x => x.id === item.id);
      if (idx >= 0) {
        data[idx] = {
          ...data[idx],
          reofferStatus:'invalidated',
          reofferInvalidatedAt:new Date().toISOString(),
          reofferInvalidatedReason:'slot-taken',
          reofferToken:null
        };
        invalidIds.push(item.id);
        changed = true;
      }
    }
  });
  if (changed) {
    saveAppointmentStore(data);
    saveNotificationStore(notifications.filter(n => !(n.actionType === 'reoffer-confirm' && invalidIds.includes(n.appointmentId))));
  }
  return invalidIds;
}
function createReofferNotification(appointment) {
  if (!appointment) return null;
  removeReofferNotificationsForAppointment(appointment.id);
  const data = notificationStore();
  const salonName = salonProfile().name || 'Beauty Moment';
  const pronoun = customerPronounForAppointment(appointment);
  const givenName = customerGivenName(appointment.customerName || '');
  const greetingName = givenName && givenName.toLocaleLowerCase('vi-VN') !== 'bạn' ? ` ${givenName}` : '';
  const token = `reoffer-${appointment.id}-${Date.now()}`;
  const notification = {
    id: token,
    recipientPhone: normalizePhone(appointment.customerPhone),
    recipientRole:'Khách hàng',
    appointmentId:appointment.id,
    reofferToken:token,
    actionType:'reoffer-confirm',
    type:'booking',
    sender:salonName,
    title:`Khung giờ ${appointment.displayTime} đã trống trở lại`,
    message:`Nếu ${pronoun} vẫn muốn sử dụng ${appointment.serviceName}, hãy xác nhận lại để tiệm giữ chỗ.`,
    content:`LỜI MỜI XÁC NHẬN LẠI LỊCH

Khung giờ bạn đã đăng ký trước đó hiện đã trống trở lại.

Dịch vụ: ${appointment.serviceName}
Ngày hẹn: ${appointment.displayDate}
Giờ bắt đầu: ${appointment.displayTime}
Giờ kết thúc dự kiến: ${appointment.displayEndTime}

Nếu bạn vẫn muốn sử dụng dịch vụ, hãy bấm “Xác nhận” để hệ thống kiểm tra lại chỗ trống và khôi phục lịch. Lời mời này không tự giữ chỗ; nếu khung giờ được khách khác xác nhận trước, lời mời sẽ tự hết hiệu lực.`,
    audioText:`Em chào ${pronoun}${greetingName} ạ. Khung giờ ${pronoun} đã đăng ký trước đó hiện đã trống trở lại. Nếu ${pronoun} vẫn muốn sử dụng dịch vụ ${appointment.serviceName}, ${pronoun} vui lòng bấm Xác nhận để tiệm giữ chỗ cho ${pronoun} nhé. ${salonName} rất mong được phục vụ ${pronoun} ạ.`,
    createdAt:new Date().toISOString(),
    read:false
  };
  data.unshift(notification);
  saveNotificationStore(data);
  saveAppointmentPatch(appointment.id, {
    reofferStatus:'pending',
    reofferToken:token,
    reofferCreatedAt:notification.createdAt,
    reofferInvalidatedAt:null,
    reofferInvalidatedReason:null
  });
  return notification;
}
function confirmReofferFromNotification(notificationId) {
  const notification = notificationStore().find(item => item.id === notificationId);
  const session = getSession();
  if (!notification || !session || session.role !== 'Khách hàng') return;
  const data = appointmentStore();
  const idx = data.findIndex(item => item.id === notification.appointmentId);
  if (idx < 0) {
    removeReofferNotificationsForAppointment(notification.appointmentId);
    renderNotifications();
    showToast('Lời mời xác nhận này không còn hiệu lực.');
    return;
  }
  const item = data[idx];
  if (!appointmentIsReofferPending(item) || item.reofferToken !== notification.reofferToken) {
    removeReofferNotificationsForAppointment(item.id);
    renderNotifications();
    showToast('Lời mời xác nhận này không còn hiệu lực.');
    return;
  }
  const freeTable = freeTableForAppointment(item, data);
  if (!freeTable) {
    invalidateReofferAppointment(item.id, 'slot-taken-before-customer-confirm');
    renderNotifications();
    renderMySchedule();
    showToast('Khung giờ này vừa được khách khác giữ chỗ nên lời mời đã hết hiệu lực.');
    return;
  }
  data[idx] = {
    ...item,
    status:'Đã nhận lịch',
    tableNumber:freeTable,
    confirmedAt:new Date().toISOString(),
    rejectedAt:null,
    reofferStatus:'confirmed',
    reofferConfirmedAt:new Date().toISOString(),
    reofferToken:null,
    completed:false,
    completedAt:null
  };
  saveAppointmentStore(data);
  removeReofferNotificationsForAppointment(item.id);
  createCustomerDecisionNotification(data[idx], 'accept');
  invalidateUnavailableReoffers();
  renderNotifications();
  renderMySchedule();
  showToast('Đã xác nhận lại lịch. Tiệm đã giữ chỗ cho bạn.');
}
function reconcileServiceCareSignalsV55() {
  const data = appointmentStore();
  let changed = false;
  const now = new Date().toISOString();
  data.forEach((item,index) => {
    const feedback = String(item?.serviceFeedback || '').trim();
    const ruleSentiment = feedback ? analyzeServiceFeedback(feedback) : {label:'none',score:0,engine:'rules-v55'};
    const trustedBrowserAI = feedback && item.serviceFeedbackAnalysisText === feedback && String(item.serviceFeedbackSentimentEngine || '').includes('browser-ai') && ['negative','neutral','positive'].includes(String(item.serviceFeedbackSentiment || ''));
    const sentiment = ruleSentiment.label === 'negative'
      ? ruleSentiment
      : (trustedBrowserAI ? {...ruleSentiment,label:item.serviceFeedbackSentiment,text:item.serviceFeedbackSentiment==='negative'?'Cần xử lý':(item.serviceFeedbackSentiment==='positive'?'Tích cực':'Trung tính'),engine:item.serviceFeedbackSentimentEngine} : ruleSentiment);
    const rating = item?.ratingFinalized ? Math.max(0,Math.min(5,Number(item?.rating)||0)) : 0;
    const urgent = (rating > 0 && rating <= 2) || sentiment.label === 'negative';
    const desiredEngine = trustedBrowserAI && ruleSentiment.label !== 'negative' ? item.serviceFeedbackSentimentEngine : 'rules-v55';
    if (feedback && (item.serviceFeedbackAnalysisText !== feedback || item.serviceFeedbackSentiment !== sentiment.label || item.serviceFeedbackSentimentEngine !== desiredEngine)) {
      data[index] = {...data[index],serviceFeedbackSentiment:sentiment.label,serviceFeedbackSentimentScore:sentiment.score,serviceFeedbackSentimentEngine:desiredEngine,serviceFeedbackAnalysisText:feedback};
      changed = true;
    }
    if (urgent && !['new','seen','handling','resolved'].includes(String(data[index].serviceFeedbackHandlingStatus || ''))) {
      data[index] = {...data[index],serviceFeedbackHandlingStatus:'new',serviceFeedbackHandlingUpdatedAt:now};
      changed = true;
    }
  });
  if (changed) saveAppointmentStore(data);
  const fresh = changed ? appointmentStore() : data;
  fresh.forEach(item => {
    const rating = item?.ratingFinalized ? Math.max(0,Math.min(5,Number(item?.rating)||0)) : 0;
    const sentiment = feedbackSentimentMeta(item);
    const feedback = String(item?.serviceFeedback || '').trim();
    const urgent = (rating > 0 && rating <= 2) || (feedback && sentiment.label === 'negative');
    if (item.ratingFinalized && rating > 0 && rating <= 3) {
      createRatingCareNotification(item);
      createManagerRatingAttentionAlert(item);
    }
    if (urgent && feedback && sentiment.label === 'negative') {
      createManagerNegativeFeedbackAlert(item);
      if (!item.serviceFeedbackCareNotifiedAt) {
        createNegativeFeedbackCareNotification(item);
        saveAppointmentPatch(item.id,{serviceFeedbackCareNotifiedAt:now});
      }
    }
  });
}
function localDateKeyV57(date) {
  const d = date instanceof Date ? date : new Date(date || 0);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function managerAppointmentExpiredRejectedV57(item, now=new Date()) {
  if (!item || !appointmentIsDeclined(item.status) || appointmentIsReofferPending(item)) return false;
  const start = new Date(item.startAt || 0);
  if (Number.isNaN(start.getTime())) return false;
  const cutoff = new Date(start.getFullYear(), start.getMonth(), start.getDate()+1, 0, 0, 0, 0);
  return now.getTime() >= cutoff.getTime();
}
function managerAppointmentArchivedRejectedV57(item) {
  return String(item?.managerArchiveState || '') === 'rejected-expired';
}
function reconcileManagerScheduleArchiveV57(now=new Date()) {
  const data = appointmentStore();
  let changed = false;
  const archivedAt = now.toISOString();
  data.forEach((item,index) => {
    const expiredRejected = managerAppointmentExpiredRejectedV57(item, now);
    if (expiredRejected && !managerAppointmentArchivedRejectedV57(item)) {
      data[index] = {
        ...item,
        managerArchiveState:'rejected-expired',
        managerArchiveReason:'Từ chối và đã hết ngày phục vụ',
        managerArchivedAt:archivedAt
      };
      changed = true;
      return;
    }
    if (!appointmentIsDeclined(item.status) && managerAppointmentArchivedRejectedV57(item)) {
      const next = {...item};
      delete next.managerArchiveState;
      delete next.managerArchiveReason;
      delete next.managerArchivedAt;
      data[index] = next;
      changed = true;
    }
  });
  if (changed) saveAppointmentStore(data);
  return changed;
}
function managerAppointmentVisible(item) {
  // Vision 57: bảng mặc định là bảng điều hành, không phải kho lịch sử.
  // Luôn giữ phản hồi tiêu cực chưa xử lý; ngoài ra chỉ giữ lịch đang chờ/đã nhận.
  if (feedbackNeedsPriority(item)) return true;
  if (item?.completed) return false;
  if (managerAppointmentArchivedRejectedV57(item)) return false;
  if (appointmentIsReofferPending(item)) return true;
  return appointmentIsPending(item.status) || appointmentIsAccepted(item.status);
}
function managerAppointmentSortGroup(item) {
  if (feedbackNeedsPriority(item)) return 0;
  if (appointmentIsReofferPending(item) || appointmentIsPending(item.status)) return 1;
  if (!item.completed && appointmentIsAccepted(item.status)) return 2;
  if (appointmentIsDeclined(item.status) && !managerAppointmentArchivedRejectedV57(item)) return 3;
  if (item.completed) return 4;
  if (managerAppointmentArchivedRejectedV57(item)) return 5;
  return 6;
}
function managerAppointmentSort(a,b) {
  const groupA = managerAppointmentSortGroup(a);
  const groupB = managerAppointmentSortGroup(b);
  if (groupA !== groupB) return groupA - groupB;
  if (groupA === 4) return new Date(b.completedAt || b.startAt || 0) - new Date(a.completedAt || a.startAt || 0);
  if (groupA === 5) return new Date(b.managerArchivedAt || b.rejectedAt || b.startAt || 0) - new Date(a.managerArchivedAt || a.rejectedAt || a.startAt || 0);
  if (groupA === 1) return new Date(b.createdAt || b.startAt || 0) - new Date(a.createdAt || a.startAt || 0);
  const aDecision = a.managerDecisionAt || a.confirmedAt || a.rejectedAt || a.createdAt || a.startAt || 0;
  const bDecision = b.managerDecisionAt || b.confirmedAt || b.rejectedAt || b.createdAt || b.startAt || 0;
  return new Date(bDecision) - new Date(aDecision);
}
function managerRatingLabel(item) {
  const rating = Math.max(0, Math.min(5, Number(item.rating) || 0));
  if (!rating) return '—';
  return item.ratingFinalized ? `${rating} ${'★'.repeat(rating)} ✓` : `${rating} ${'★'.repeat(rating)} · chưa chốt`;
}
function managerFeedbackCellHtml(item) {
  const feedback = String(item?.serviceFeedback || '').trim();
  const care = serviceCareMeta(item);
  const sentiment = care.sentiment;
  const handling = feedbackHandlingStatus(item);
  const unresolvedUrgent = care.urgent && handling !== 'resolved';
  const threeStarOnly = care.threeStar && !care.negativeFeedback;
  if (!feedback && !care.lowRating && !care.threeStar) return '<td class="manager-feedback-cell is-empty">—</td>';
  const cls = care.urgent ? 'is-negative' : (threeStarOnly ? 'is-caution' : (sentiment.label === 'positive' ? 'is-positive' : 'is-neutral'));
  const sentimentLabel = care.urgent
    ? (care.lowRating && !feedback ? `Đánh giá ${care.rating}★ • Cần xử lý` : 'Cần xử lý')
    : (threeStarOnly ? '3★ • Cần quan tâm' : sentiment.text);
  const feedbackText = feedback || (care.threeStar
    ? 'Khách chưa để lại phản hồi bằng chữ. Hệ thống vẫn theo dõi vì mức 3 sao có thể cho thấy trải nghiệm chưa thật sự trọn vẹn.'
    : `Khách chưa để lại phản hồi bằng chữ nhưng đã xác nhận ${care.rating}/5 sao.`);
  return `<td class="manager-feedback-cell ${cls} ${unresolvedUrgent ? 'needs-action' : ''}">
    <span class="manager-feedback-sentiment">${escapeUiText(sentimentLabel)}</span>
    <span class="manager-feedback-text">${escapeUiText(feedbackText)}</span>
    ${care.urgent ? `<div class="manager-feedback-workflow">
      <label>Trạng thái xử lý
        <select data-feedback-handling="${escapeUiText(item.id)}">
          <option value="new" ${handling === 'new' ? 'selected' : ''}>Cần xử lý</option>
          <option value="seen" ${handling === 'seen' ? 'selected' : ''}>Đã xem</option>
          <option value="handling" ${handling === 'handling' ? 'selected' : ''}>Đang xử lý</option>
          <option value="resolved" ${handling === 'resolved' ? 'selected' : ''}>Đã xử lý</option>
        </select>
      </label>
      ${unresolvedUrgent ? '<span class="manager-feedback-priority-badge">Ưu tiên đầu bảng</span>' : '<span class="manager-feedback-resolved-badge">Đã xử lý</span>'}
    </div>` : (threeStarOnly ? '<span class="manager-feedback-watch-badge">Đã gửi chăm sóc 3★ cho khách</span>' : '')}
  </td>`;
}
function managerScheduleStatusMatchV57(item, status='operating') {
  if (status === 'all') return true;
  if (status === 'priority') return feedbackNeedsPriority(item);
  if (status === 'completed') return Boolean(item.completed);
  if (status === 'rejected') return appointmentIsDeclined(item.status) && !appointmentIsReofferPending(item);
  if (status === 'pending') return !item.completed && (appointmentIsPending(item.status) || appointmentIsReofferPending(item));
  if (status === 'accepted') return !item.completed && appointmentIsAccepted(item.status);
  return managerAppointmentVisible(item);
}
function managerScheduleRatingMatchV57(item, rating='all') {
  if (rating === 'all') return true;
  const finalized = Boolean(item.ratingFinalized);
  const value = Math.max(0, Math.min(5, Number(item.rating) || 0));
  if (rating === 'unrated') return !finalized || !value;
  return finalized && value === Number(rating);
}
function managerScheduleServiceKeyV57(item) {
  return String(item?.serviceId || item?.serviceName || '').trim() || 'unknown';
}
function managerScheduleSourceKeyV57(item) {
  if (item?.bookingSource === 'walk-in') return 'walkin';
  if (item?.bookingSource === 'manager-account') return 'manager';
  return 'app';
}
function managerScheduleApplyFiltersV57(allItems) {
  const f = managerScheduleFiltersV57;
  return allItems.filter(item => {
    if (!managerScheduleStatusMatchV57(item, f.status)) return false;
    if (!managerScheduleRatingMatchV57(item, f.rating)) return false;
    if (f.service !== 'all' && managerScheduleServiceKeyV57(item) !== f.service) return false;
    if (f.source !== 'all' && managerScheduleSourceKeyV57(item) !== f.source) return false;
    return true;
  }).sort(managerAppointmentSort);
}
function managerScheduleFilterBarV57(allItems) {
  const f = managerScheduleFiltersV57;
  const countStatus = key => allItems.filter(item => managerScheduleStatusMatchV57(item,key)).length;
  const countRating = key => allItems.filter(item => managerScheduleRatingMatchV57(item,key)).length;
  const services = new Map();
  allItems.forEach(item => {
    const key = managerScheduleServiceKeyV57(item);
    if (!key || key === 'unknown') return;
    if (!services.has(key)) services.set(key, item.serviceName || SERVICE_DATA[item.serviceId]?.label || key);
  });
  const serviceOptions = [...services.entries()].sort((a,b)=>String(a[1]).localeCompare(String(b[1]),'vi')).map(([key,label]) => `<option value="${escapeUiText(key)}" ${f.service===key?'selected':''}>${escapeUiText(label)}</option>`).join('');
  const sourceCount = key => allItems.filter(item => managerScheduleSourceKeyV57(item) === key).length;
  return `<div class="manager-schedule-filter-panel">
    <div class="manager-filter-heading">
      <div><small>BỘ LỌC LỊCH KHÁCH HÀNG</small><strong>Xem đúng nhóm lịch cần xử lý</strong></div>
      <button type="button" data-manager-filter-reset>Hiển thị mặc định</button>
    </div>
    <div class="manager-filter-grid">
      <label><span>Trạng thái</span><select data-manager-filter-status>
        <option value="operating" ${f.status==='operating'?'selected':''}>Đang hoạt động (${countStatus('operating')})</option>
        <option value="priority" ${f.status==='priority'?'selected':''}>Cần xử lý phản hồi (${countStatus('priority')})</option>
        <option value="pending" ${f.status==='pending'?'selected':''}>Chờ xác nhận (${countStatus('pending')})</option>
        <option value="accepted" ${f.status==='accepted'?'selected':''}>Đã nhận lịch (${countStatus('accepted')})</option>
        <option value="rejected" ${f.status==='rejected'?'selected':''}>Từ chối / lưu trữ (${countStatus('rejected')})</option>
        <option value="completed" ${f.status==='completed'?'selected':''}>Hoàn thành (${countStatus('completed')})</option>
        <option value="all" ${f.status==='all'?'selected':''}>Xem tất cả (${allItems.length})</option>
      </select></label>
      <label><span>Đánh giá</span><select data-manager-filter-rating>
        <option value="all" ${f.rating==='all'?'selected':''}>Tất cả sao</option>
        <option value="5" ${f.rating==='5'?'selected':''}>5 sao (${countRating('5')})</option>
        <option value="4" ${f.rating==='4'?'selected':''}>4 sao (${countRating('4')})</option>
        <option value="3" ${f.rating==='3'?'selected':''}>3 sao (${countRating('3')})</option>
        <option value="2" ${f.rating==='2'?'selected':''}>2 sao (${countRating('2')})</option>
        <option value="1" ${f.rating==='1'?'selected':''}>1 sao (${countRating('1')})</option>
        <option value="unrated" ${f.rating==='unrated'?'selected':''}>Chưa đánh giá (${countRating('unrated')})</option>
      </select></label>
      <label><span>Dịch vụ</span><select data-manager-filter-service><option value="all">Tất cả dịch vụ</option>${serviceOptions}</select></label>
      <label><span>Nguồn đặt</span><select data-manager-filter-source>
        <option value="all" ${f.source==='all'?'selected':''}>Tất cả nguồn</option>
        <option value="app" ${f.source==='app'?'selected':''}>APP khách (${sourceCount('app')})</option>
        <option value="manager" ${f.source==='manager'?'selected':''}>Quản lý đặt hộ (${sourceCount('manager')})</option>
        <option value="walkin" ${f.source==='walkin'?'selected':''}>Khách vãng lai (${sourceCount('walkin')})</option>
      </select></label>
    </div>
  </div>`;
}
function bindManagerScheduleFiltersV57(session) {
  managerScheduleList.querySelector('[data-manager-filter-status]')?.addEventListener('change', e => { managerScheduleFiltersV57.status=e.target.value; renderManagerSchedule(session); });
  managerScheduleList.querySelector('[data-manager-filter-rating]')?.addEventListener('change', e => { managerScheduleFiltersV57.rating=e.target.value; renderManagerSchedule(session); });
  managerScheduleList.querySelector('[data-manager-filter-service]')?.addEventListener('change', e => { managerScheduleFiltersV57.service=e.target.value; renderManagerSchedule(session); });
  managerScheduleList.querySelector('[data-manager-filter-source]')?.addEventListener('change', e => { managerScheduleFiltersV57.source=e.target.value; renderManagerSchedule(session); });
  managerScheduleList.querySelector('[data-manager-filter-reset]')?.addEventListener('click', () => { managerScheduleFiltersV57={status:'operating',rating:'all',service:'all',source:'all'}; renderManagerSchedule(session); });
}
function renderManagerSchedule(session) {
  reconcileManagerScheduleArchiveV57();
  const allItems = appointmentStore().slice();
  const items = managerScheduleApplyFiltersV57(allItems);
  const defaultOperatingCount = allItems.filter(managerAppointmentVisible).length;
  const priorityFeedbackCountAll = allItems.filter(feedbackNeedsPriority).length;
  const completedTotal = allItems.filter(item => item.completed).length;
  const archivedRejectedTotal = allItems.filter(managerAppointmentArchivedRejectedV57).length;
  managerScheduleAccount.textContent = `${session.name} • ${items.length}/${allItems.length} lịch theo bộ lọc • ${defaultOperatingCount} đang vận hành${priorityFeedbackCountAll ? ` • ${priorityFeedbackCountAll} cần xử lý` : ''}`;
  const sourceStats = { app:0, manager:0, walkin:0 };
  items.forEach(item => {
    if (item.bookingSource === 'walk-in') sourceStats.walkin += 1;
    else if (item.bookingSource === 'manager-account') sourceStats.manager += 1;
    else sourceStats.app += 1;
  });
  const filterBar = managerScheduleFilterBarV57(allItems);
  const summaryBar = `<div class="manager-table-toolbar ${priorityFeedbackCountAll ? 'has-priority-feedback' : ''}">
      <span>Chế độ mặc định chỉ hiển thị lịch đang vận hành</span>
      <span>${priorityFeedbackCountAll ? `<b class="priority-count">${priorityFeedbackCountAll}</b> phản hồi cần xử lý • ` : ''}<b>${defaultOperatingCount}</b> đang vận hành • <b>${completedTotal}</b> hoàn thành • <b>${archivedRejectedTotal}</b> từ chối đã lưu trữ</span>
      <span class="manager-source-summary"><b>Trong kết quả:</b> APP ${sourceStats.app} • Đặt hộ ${sourceStats.manager} • Vãng lai ${sourceStats.walkin}</span>
    </div>`;
  if (!items.length) {
    managerScheduleList.innerHTML = `${filterBar}${summaryBar}<div class="schedule-empty"><div class="schedule-empty-icon">▦</div><strong>Không có lịch phù hợp bộ lọc</strong><p>Dữ liệu lịch sử vẫn được giữ nguyên. Hãy đổi bộ lọc hoặc chọn “Xem tất cả” nếu cần tra cứu.</p></div>`;
    bindManagerScheduleFiltersV57(session);
    return;
  }
  managerScheduleList.innerHTML = `${filterBar}${summaryBar}
    <div class="manager-table-scroll" role="region" aria-label="Bảng lịch khách hàng" tabindex="0">
      <table class="manager-appointment-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên khách hàng</th>
            <th>Giới tính</th>
            <th>SĐT</th>
            <th>Địa chỉ</th>
            <th>Nguồn đặt</th>
            <th>Dịch vụ</th>
            <th>Ngày PV</th>
            <th>Giờ bắt đầu</th>
            <th>Giờ kết thúc</th>
            <th>Kiểu / mẫu</th>
            <th>Bàn</th>
            <th>Đồng ý</th>
            <th>Từ chối</th>
            <th>NV PV</th>
            <th>Đánh giá</th>
            <th>Phản hồi DV</th>
            <th>Ghi chú</th>
            <th>Hoàn thành</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item, index) => {
            const start = new Date(item.startAt || 0);
            const end = item.endAt ? new Date(item.endAt) : null;
            const dateFull = Number.isNaN(start.getTime()) ? (item.displayDate || '—') : start.toLocaleDateString('vi-VN', {day:'2-digit',month:'2-digit',year:'numeric'});
            const startTime = Number.isNaN(start.getTime()) ? (item.displayTime || '—') : start.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});
            const endTime = end && !Number.isNaN(end.getTime()) ? end.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'}) : (item.displayEndTime || '—');
            const accepted = appointmentIsAccepted(item.status);
            const declined = appointmentIsDeclined(item.status);
            const reofferPending = appointmentIsReofferPending(item);
            const completed = Boolean(item.completed);
            const archivedRejected = managerAppointmentArchivedRejectedV57(item);
            const pattern = item.nailSample || (item.serviceId === 'nail-care' ? 'Chưa chọn mẫu' : 'Không áp dụng');
            const feedbackPriority = feedbackNeedsPriority(item);
            const decisionDisabled = archivedRejected ? 'disabled' : '';
            return `<tr class="${completed ? 'is-completed' : ''} ${declined ? 'is-declined' : ''} ${archivedRejected ? 'is-archived-rejected' : ''} ${reofferPending ? 'is-reoffer-pending' : ''} ${feedbackPriority ? 'has-priority-feedback' : ''}" data-manager-row="${item.id}">
              <td class="manager-col-stt">${index + 1}</td>
              <td class="manager-col-name"><strong>${escapeUiText(item.customerName || 'Khách hàng')}</strong></td>
              <td class="manager-col-gender">${escapeUiText(managerCustomerGender(item))}</td>
              <td>${escapeUiText(item.customerPhone || '—')}</td>
              <td>${escapeUiText(managerCustomerAddress(item))}</td>
              <td class="manager-source-cell"><span class="manager-source-badge ${item.bookingSource === 'walk-in' ? 'walk-in' : item.bookingSource === 'manager-account' ? 'manager-booked' : 'customer-app'}">${escapeUiText(bookingSourceLabel(item))}</span></td>
              <td class="manager-col-service"><strong>${escapeUiText(item.serviceName || 'Dịch vụ tại tiệm')}</strong><small>${escapeUiText(item.price || '')}${item.duration ? ` • ${escapeUiText(item.duration)}` : ''}</small>${reofferPending ? '<em class="manager-reoffer-note">Đang chờ khách xác nhận lại</em>' : ''}${archivedRejected ? '<em class="manager-archive-note">Đã hết ngày • lưu trữ</em>' : ''}</td>
              <td>${dateFull}</td>
              <td><strong>${startTime}</strong></td>
              <td><strong>${endTime}</strong></td>
              <td>${escapeUiText(pattern)}</td>
              <td>${item.tableNumber ? `BÀN ${escapeUiText(item.tableNumber)}` : '—'}</td>
              <td class="manager-check-cell"><label class="manager-check approve-check ${reofferPending ? 'is-reoffer' : ''} ${archivedRejected ? 'is-disabled' : ''}" title="${archivedRejected ? 'Lịch từ chối đã hết ngày phục vụ và được lưu trữ' : (reofferPending ? 'Đang chờ khách xác nhận lại' : 'Đồng ý nhận lịch')}"><input type="checkbox" data-manager-approve="${item.id}" ${(accepted || reofferPending) ? 'checked' : ''} ${decisionDisabled}><span>✓</span></label></td>
              <td class="manager-check-cell"><label class="manager-check reject-check ${archivedRejected ? 'is-disabled' : ''}" title="${archivedRejected ? 'Lịch đã lưu trữ' : 'Từ chối lịch'}"><input type="checkbox" data-manager-reject="${item.id}" ${(declined && !reofferPending) ? 'checked' : ''} ${decisionDisabled}><span>×</span></label></td>
              <td class="manager-staff-cell">${!declined && !archivedRejected && !item.ratingFinalized && !completed ? `<button type="button" class="manager-staff-assign-btn" data-manager-select-staff="${escapeUiText(item.id)}">${escapeUiText(item.serviceStaffName || 'Chọn NV')}</button>` : escapeUiText(item.serviceStaffName || '—')}</td>
              <td class="manager-rating-cell">${managerRatingLabel(item)}</td>
              ${managerFeedbackCellHtml(item)}
              <td class="manager-note-cell">${escapeUiText(item.note || '—')}</td>
              <td class="manager-check-cell"><label class="manager-check complete-check ${!accepted ? 'is-disabled' : ''}" title="${accepted ? 'Đánh dấu hoàn thành' : 'Cần đồng ý lịch trước'}"><input type="checkbox" data-manager-complete="${item.id}" ${completed ? 'checked' : ''} ${accepted ? '' : 'disabled'}><span>✓</span></label></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    <p class="manager-table-footnote"><b>Vision 57:</b> bảng mặc định chỉ giữ phản hồi tiêu cực chưa xử lý, lịch Chờ xác nhận và lịch Đã nhận. Lịch <b>Hoàn thành</b> được ẩn khỏi bảng mặc định ngay nhưng vẫn giữ vĩnh viễn cho Doanh thu, CRM, Nhân viên và báo cáo. Lịch <b>Từ chối</b> được giữ trong ngày để còn khả năng khôi phục; qua 00:00 ngày kế tiếp sẽ tự chuyển sang lưu trữ và không xuất hiện trong bảng mặc định. Dùng Bộ lọc để xem lại lịch sử bất kỳ lúc nào.</p>`;

  bindManagerScheduleFiltersV57(session);
  managerScheduleList.querySelectorAll('[data-manager-approve]').forEach(input => input.addEventListener('change', () => {
    if (!input.checked) { renderManagerSchedule(session); return; }
    managerAppointmentDecision(input.dataset.managerApprove, 'accept');
  }));
  managerScheduleList.querySelectorAll('[data-manager-reject]').forEach(input => input.addEventListener('change', () => {
    if (!input.checked) { renderManagerSchedule(session); return; }
    managerAppointmentDecision(input.dataset.managerReject, 'decline');
  }));
  managerScheduleList.querySelectorAll('[data-manager-complete]').forEach(input => input.addEventListener('change', () => managerAppointmentComplete(input.dataset.managerComplete, input.checked)));
  managerScheduleList.querySelectorAll('[data-manager-select-staff]').forEach(btn => btn.addEventListener('click', () => openStaffSelectModal(btn.dataset.managerSelectStaff)));
  managerScheduleList.querySelectorAll('[data-feedback-handling]').forEach(select => select.addEventListener('change', () => updateFeedbackHandlingStatus(select.dataset.feedbackHandling, select.value)));
}
function renderMySchedule() {
  const session = getSession();
  if (!session) return;
  if (session.role === 'Khách hàng') renderCustomerSchedule(session);
  else if (session.role === 'Quản lý') renderManagerSchedule(session);
}
function openMyScheduleModal() {
  const session = getSession();
  if (!session) {
    openAuth('Khách hàng');
    goLogin();
    showToast('Vui lòng đăng nhập Khách hàng để xem Lịch của tôi.');
    return;
  }
  toggleMenu(false);
  toggleNotificationPanel(false);
  if (session.role === 'Khách hàng') {
    renderCustomerSchedule(session);
    myScheduleBackdrop.classList.add('open');
    myScheduleBackdrop.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    return;
  }
  if (session.role === 'Quản lý') {
    renderManagerSchedule(session);
    managerScheduleBackdrop.classList.add('open');
    managerScheduleBackdrop.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    return;
  }
  showToast('Khu vực lịch hiện hỗ trợ tài khoản Khách hàng và Quản lý.');
}
function closeMyScheduleModal() {
  myScheduleBackdrop.classList.remove('open');
  myScheduleBackdrop.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
function closeManagerScheduleModal() {
  managerScheduleBackdrop.classList.remove('open');
  managerScheduleBackdrop.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

function openContactModal() {
  renderSalonProfile();
  setContactModeForSession();
  toggleMenu(false);
  toggleNotificationPanel(false);
  contactBackdrop.classList.add('open');
  contactBackdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeContactModal() {
  contactBackdrop.classList.remove('open');
  contactBackdrop.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

function openNailGallery(mode='browse') {
  if (!nailGalleryBackdrop) return;
  nailGalleryMode = mode === 'booking' ? 'booking' : mode === 'manage' ? 'manage' : 'browse';
  nailGalleryBackdrop.classList.toggle('is-booking-select', nailGalleryMode === 'booking');
  nailGalleryBackdrop.classList.toggle('is-manager-library', nailGalleryMode === 'manage');
  renderNailGallery();
  toggleMenu(false);
  toggleNotificationPanel(false);
  nailGalleryBackdrop.classList.add('open');
  nailGalleryBackdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeNailGalleryModal() {
  if (!nailGalleryBackdrop) return;
  nailGalleryBackdrop.classList.remove('open');
  nailGalleryBackdrop.setAttribute('aria-hidden','true');
  nailGalleryBackdrop.classList.remove('is-booking-select');
  nailGalleryBackdrop.classList.remove('is-manager-library');
  nailGalleryMode = 'browse';
  document.body.style.overflow = bookingBackdrop?.classList.contains('open') ? 'hidden' : '';
}
function chooseNailSampleFromCard(card) {
  if (!card || nailGalleryMode !== 'booking') return;
  const code = card.dataset.nailCode || '';
  const name = card.dataset.nailName || '';
  const image = card.dataset.nailImage || '';
  const value = [code, name].filter(Boolean).join(' — ');
  if ($('bookingNailSample')) $('bookingNailSample').value = value;
  if ($('bookingNailSampleName')) $('bookingNailSampleName').textContent = value || 'Chưa chọn mẫu móng';
  const thumb = $('bookingNailThumb');
  if (thumb) {
    if (image) { thumb.src = image; thumb.hidden = false; }
    else { thumb.hidden = true; }
  }
  closeNailGalleryModal();
  showToast(value ? `Đã chọn ${value}.` : 'Đã cập nhật mẫu móng.');
}

function openServiceDetail(serviceId) {
  const service = SERVICE_DATA[serviceId];
  if (!service || !serviceDetailBackdrop) return;
  $('serviceDetailEyebrow').textContent = service.eyebrow || 'DỊCH VỤ TẠI TIỆM';
  $('serviceDetailTitle').textContent = service.title || 'Dịch vụ';
  $('serviceDetailTitle').classList.toggle('booking-goi-title', serviceId === 'goi-duong-sinh');
  $('serviceDetailDesc').textContent = service.description || '';
  $('serviceDetailPrice').textContent = service.price || '';
  $('serviceDetailDuration').textContent = service.duration || '';
  $('serviceDetailSummary').textContent = service.summary || '';
  if (serviceDetailBookBtn) serviceDetailBookBtn.dataset.serviceId = serviceId;
  const img = $('serviceDetailImage');
  img.src = service.image;
  img.alt = service.title || 'Hình ảnh dịch vụ';
  $('serviceSteps').innerHTML = (service.steps || []).map((step, index) => `
    <article class="service-step">
      <div class="service-step-index">${String(index + 1).padStart(2,'0')}</div>
      <div class="service-step-copy">
        <strong>${step.title}</strong>
        <span>${step.text}</span>
      </div>
    </article>
  `).join('');
  toggleMenu(false);
  toggleNotificationPanel(false);
  serviceDetailBackdrop.classList.add('open');
  serviceDetailBackdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeServiceDetailModal() {
  if (!serviceDetailBackdrop) return;
  serviceDetailBackdrop.classList.remove('open');
  serviceDetailBackdrop.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

// VISION 60 — thời gian đệm nằm BÊN TRONG tổng thời gian dịch vụ.
// Booking Engine vẫn dùng tổng thời gian cũ; không cộng thêm phút vào lịch.
function serviceTimingMetaV60(serviceOrId) {
  const service = typeof serviceOrId === 'string' ? SERVICE_DATA[serviceOrId] : (serviceOrId || {});
  const totalMinutes = Math.max(1, durationToMinutes(service?.duration || '60 phút'));
  const rawBuffer = service?.bufferMinutes;
  const bufferMinutes = Math.max(0, Math.min(totalMinutes - 1, Number.isFinite(Number(rawBuffer)) ? Math.floor(Number(rawBuffer)) : 10));
  const serviceMinutes = Math.max(1, totalMinutes - bufferMinutes);
  return { serviceMinutes, bufferMinutes, totalMinutes };
}
function updateManagerServiceTimingPreviewV60() {
  if (!managerServiceTimingPreview) return;
  const totalMinutes = Math.max(0, durationToMinutes(managerServiceDuration?.value || ''));
  const bufferRaw = Math.max(0, Math.floor(Number(managerServiceBuffer?.value) || 0));
  const bufferMinutes = totalMinutes ? Math.min(bufferRaw, Math.max(0,totalMinutes-1)) : bufferRaw;
  const serviceMinutes = totalMinutes ? Math.max(0,totalMinutes-bufferMinutes) : 0;
  managerServiceTimingPreview.innerHTML = `<span>Phục vụ khách: <b>${serviceMinutes || '—'}${serviceMinutes?' phút':''}</b></span><span>Đệm: <b>${bufferMinutes} phút</b></span><span>Tổng: <b>${totalMinutes || '—'}${totalMinutes?' phút':''}</b></span>`;
}
function renderBookingTimingBreakdownV60(serviceOrId) {
  const meta = serviceTimingMetaV60(serviceOrId);
  const customer = $('bookingServiceCustomerMinutes');
  const buffer = $('bookingServiceBufferMinutes');
  const total = $('bookingServiceTotalMinutes');
  if (customer) customer.textContent = `${meta.serviceMinutes} phút`;
  if (buffer) buffer.textContent = `${meta.bufferMinutes} phút`;
  if (total) total.textContent = `${meta.totalMinutes} phút`;
}

function durationToMinutes(text='') {
  const num = parseInt(String(text).replace(/[^0-9]/g,''), 10);
  return Number.isFinite(num) ? num : 0;
}
function formatTimeFromDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '--:--';
  return date.toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'});
}
function refreshBookingTimeOptions(preserve=true) {
  const select = $('bookingTime');
  if (!select) return;
  const previous = preserve ? select.value : '';
  const date = $('bookingDate')?.value || localDateISO();
  const serviceId = $('bookingService')?.value || currentBookingServiceId || 'nail-care';
  const service = SERVICE_DATA[serviceId] || SERVICE_DATA['nail-care'];
  const duration = durationToMinutes(service?.duration || '60 phút');
  const hours = shopHoursForDate(date);
  const open = minutesFromTime(hours.open), close = minutesFromTime(hours.close);
  const times=[];
  const step = bookingContextRole === 'manager' ? 5 : 30;
  for(let minute=open; minute+duration<=close; minute+=step) times.push(timeFromMinutes(minute));
  select.innerHTML = times.length ? times.map(t=>`<option value="${t}">${t}</option>`).join('') : '<option value="">Không có khung giờ phù hợp</option>';
  if(previous && times.includes(previous)) select.value=previous;
  else if(times.length) select.value=times[0];
  select.disabled=!times.length;
  select.dataset.hoursDate=date;
  select.dataset.hoursRange=formatHoursRange(hours);
}
function ensureBookingTimeOptions(){ refreshBookingTimeOptions(true); }
function intervalsOverlap(startA, endA, startB, endB) {
  return startA < endB && startB < endA;
}
function appointmentEndDate(item) {
  const direct = item?.endAt ? new Date(item.endAt) : null;
  if (direct && !Number.isNaN(direct.getTime())) return direct;
  const start = item?.startAt ? new Date(item.startAt) : null;
  if (!start || Number.isNaN(start.getTime())) return null;
  const fallback = new Date(start);
  fallback.setMinutes(fallback.getMinutes() + durationToMinutes(item.duration || SERVICE_DATA[item.serviceId]?.duration || '60 phút'));
  return fallback;
}
function localDateISO(date=new Date()) {
  const y=date.getFullYear(), m=String(date.getMonth()+1).padStart(2,'0'), d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function seedDemoWaitlist() {
  const data=waitlistStore(); if(data.length) return;
  const today=localDateISO();
  saveWaitlistStore([
    {id:'wl-n1',serviceId:'nail-care',date:today,time:'09:30',duration:60,label:'Khách chờ #01'},
    {id:'wl-n2',serviceId:'nail-care',date:today,time:'12:00',duration:60,label:'Khách chờ #02'},
    {id:'wl-n3',serviceId:'nail-care',date:today,time:'16:30',duration:60,label:'Khách chờ #03'},
    {id:'wl-g1',serviceId:'goi-duong-sinh',date:today,time:'10:00',duration:75,label:'Khách chờ #01'},
    {id:'wl-g2',serviceId:'goi-duong-sinh',date:today,time:'15:30',duration:75,label:'Khách chờ #02'},
    {id:'wl-b1',serviceId:'beauty-relax',date:today,time:'13:00',duration:90,label:'Khách chờ #01'}
  ]);
}
function waitlistEntriesFor(serviceId, date) {
  const fromStore = waitlistStore()
    .filter(x => x.serviceId === serviceId && x.date === date)
    .map((x, index) => ({
      id: x.id || `wl-store-${index}`,
      serviceId,
      date,
      time: x.time,
      duration: x.duration,
      label: x.label || `Khách chờ #${index + 1}`,
      source: 'waitlist'
    }));
  const fromAppointments = appointmentStore()
    .filter(item => item.serviceId === serviceId && !appointmentIsDeclined(item.status))
    .filter(item => {
      const start = new Date(item.startAt || 0);
      return !Number.isNaN(start.getTime()) && localDateISO(start) === date;
    })
    .map((item, index) => ({
      id: `appt-wait-${item.id}`,
      serviceId,
      date,
      time: item.displayTime || formatTimeFromDate(new Date(item.startAt)),
      duration: durationToMinutes(item.duration || SERVICE_DATA[serviceId]?.duration || '60 phút'),
      label: item.customerName ? `${item.customerName}` : `Khách đã đặt #${index + 1}`,
      status: item.status || 'Chờ xác nhận',
      source: 'appointment'
    }));
  return [...fromStore, ...fromAppointments].sort((a,b)=>String(a.time).localeCompare(String(b.time)));
}
function waitlistForCurrentSelection() {
  const serviceId=$('bookingService')?.value || currentBookingServiceId || 'nail-care';
  const date=$('bookingDate')?.value || localDateISO();
  return waitlistEntriesFor(serviceId, date);
}
function minutesFromTime(text='00:00'){const [h,m]=text.split(':').map(Number);return (h||0)*60+(m||0)}
function timeFromMinutes(total){const safe=Math.max(0,Math.min(1439,total));return `${String(Math.floor(safe/60)).padStart(2,'0')}:${String(safe%60).padStart(2,'0')}`}
function waitlistGapWindows(items,serviceId){
  const duration=durationToMinutes(SERVICE_DATA[serviceId]?.duration || '60 phút');
  const selectedDate=$('bookingDate')?.value || localDateISO();
  const shopHours=shopHoursForDate(selectedDate), opening=minutesFromTime(shopHours.open), closing=minutesFromTime(shopHours.close);
  const intervals=items.map(x=>{const s=minutesFromTime(x.time), len=Number(x.duration)||duration;return [s,s+len]}).sort((a,b)=>a[0]-b[0]);
  const merged=[]; intervals.forEach(intv=>{const last=merged[merged.length-1]; if(!last||intv[0]>last[1]) merged.push([...intv]); else last[1]=Math.max(last[1],intv[1])});
  const gaps=[]; let cursor=opening; merged.forEach(([s,e])=>{if(s-cursor>=duration) gaps.push([cursor,s]); cursor=Math.max(cursor,e)}); if(closing-cursor>=duration) gaps.push([cursor,closing]); return gaps;
}
function updateWaitlistMenu(){
  if(!bookingWaitlistBtn) return;
  const serviceId=$('bookingService')?.value || currentBookingServiceId || 'nail-care', items=waitlistForCurrentSelection(), serviceName=SERVICE_DATA[serviceId]?.title || 'dịch vụ';
  if(bookingWaitlistCount) bookingWaitlistCount.textContent=String(items.length);
  if(bookingWaitlistHint) bookingWaitlistHint.textContent=items.length?`${items.length} khách đang chờ ${serviceName} trong ngày đã chọn.`:`Chưa có khách chờ ${serviceName} trong ngày đã chọn.`;
  bookingWaitlistBtn.classList.toggle('is-busy', Object.values(serviceTableStatesForSelection(serviceId)).every(state => state !== 'free'));
  if (bookingGuideHint) bookingGuideHint.textContent = `Xem hướng dẫn cơ bản cho ${serviceName}.`;
}
function renderWaitlistModal(){
  const serviceId=$('bookingService')?.value || currentBookingServiceId || 'nail-care', service=SERVICE_DATA[serviceId]||SERVICE_DATA['nail-care'], date=$('bookingDate')?.value||localDateISO(), items=waitlistForCurrentSelection();
  $('waitlistServiceLabel').textContent=service.title; const d=new Date(`${date}T00:00:00`); $('waitlistDateLabel').textContent=`Ngày đang xem: ${Number.isNaN(d.getTime())?date:d.toLocaleDateString('vi-VN',{weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'})}`; $('waitlistTotal').textContent=`${items.length} khách`;
  const gaps=waitlistGapWindows(items,serviceId); $('waitlistGapSummary').innerHTML=gaps.length?gaps.slice(0,4).map(([s,e])=>`<span class="waitlist-gap-pill">${timeFromMinutes(s)}–${timeFromMinutes(e)}</span>`).join(''):'<span class="waitlist-gap-pill none">Chưa thấy khoảng trống phù hợp</span>';
  const box=$('waitlistItems'); if(!items.length){box.innerHTML=`<div class="waitlist-empty"><strong>Chưa có khách chờ</strong><span>Hiện chưa có ai trong danh sách chờ của ${service.title} ở ngày này.</span></div>`;return;}
  box.innerHTML=items.map((item,index)=>{const start=minutesFromTime(item.time), end=timeFromMinutes(start+(Number(item.duration)||durationToMinutes(service.duration))); const stateText=item.source==='appointment'?(item.status||'Chờ xác nhận'):`Khách chờ tham khảo`; return `<article class="waitlist-item"><div class="waitlist-item-index">${String(index+1).padStart(2,'0')}</div><div class="waitlist-item-main"><strong>${item.label||`Khách chờ #${index+1}`}</strong><span>Đúng dịch vụ ${service.title} • ${stateText}</span></div><div class="waitlist-item-time">${item.time}–${end}</div></article>`}).join('');
}
function openWaitlistModal(){if(!waitlistBackdrop)return;renderWaitlistModal();waitlistBackdrop.classList.add('open');waitlistBackdrop.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeWaitlistModal(){if(!waitlistBackdrop)return;waitlistBackdrop.classList.remove('open');waitlistBackdrop.setAttribute('aria-hidden','true');document.body.style.overflow=bookingBackdrop?.classList.contains('open')?'hidden':''}
function renderGuideModal(){
  const serviceId = $('bookingService')?.value || currentBookingServiceId || 'nail-care';
  const service = SERVICE_DATA[serviceId] || SERVICE_DATA['nail-care'];
  const guide = GUIDE_DATA[serviceId] || GUIDE_DATA['nail-care'];
  $('guideServiceLabel').textContent = service.title;
  $('guideTitle').textContent = `Hướng dẫn đặt ${service.title}`;
  $('guideIntro').textContent = guide.intro || 'Xem hướng dẫn cơ bản để đặt dịch vụ.';
  $('guideOverview').innerHTML = (guide.overview || []).map(item => `<div class="guide-overview-card"><small>${item.label}</small><strong>${item.title}</strong><span>${item.text}</span></div>`).join('');
  $('guideSteps').innerHTML = (guide.steps || []).map((step,index) => `<article class="guide-step"><div class="guide-step-index">${String(index+1).padStart(2,'0')}</div><div class="guide-step-copy"><strong>${step.title}</strong><span>${step.text}</span></div></article>`).join('');
}
function openGuideModal(){if(!guideBackdrop)return;renderGuideModal();guideBackdrop.classList.add('open');guideBackdrop.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeGuideModal(){if(!guideBackdrop)return;guideBackdrop.classList.remove('open');guideBackdrop.setAttribute('aria-hidden','true');document.body.style.overflow=bookingBackdrop?.classList.contains('open')?'hidden':''}

function serviceTableConfig(serviceId) {
  return SERVICE_RESOURCE_CONFIG[serviceId] || { tables: 0, label: 'bàn dịch vụ' };
}
function migrateServiceTableAssignments(serviceId) {
  const cfg = serviceTableConfig(serviceId);
  if (!cfg.tables) return;
  const data = appointmentStore();
  let changed = false;
  const serviceItems = data
    .filter(item => item.serviceId === serviceId && !appointmentIsDeclined(item.status))
    .sort((a,b) => new Date(a.startAt || 0) - new Date(b.startAt || 0));
  serviceItems.forEach(item => {
    const assignedNow = Number(item.tableNumber);
    if (assignedNow >= 1 && assignedNow <= cfg.tables) return;
    const start = new Date(item.startAt || 0);
    const end = appointmentEndDate(item);
    if (Number.isNaN(start.getTime()) || !end) return;
    const occupied = new Set();
    serviceItems.forEach(other => {
      if (other === item) return;
      const otherTable = Number(other.tableNumber);
      if (!(otherTable >= 1 && otherTable <= cfg.tables)) return;
      const otherStart = new Date(other.startAt || 0);
      const otherEnd = appointmentEndDate(other);
      if (!Number.isNaN(otherStart.getTime()) && otherEnd && intervalsOverlap(start,end,otherStart,otherEnd)) {
        occupied.add(otherTable);
      }
    });
    const freeTable = Array.from({length:cfg.tables},(_,i)=>i+1).find(n => !occupied.has(n));
    if (freeTable) {
      item.tableNumber = freeTable;
      const idx = data.findIndex(x => x.id === item.id);
      if (idx >= 0) data[idx].tableNumber = freeTable;
      changed = true;
    }
  });
  if (changed) saveAppointmentStore(data);
}
function migrateAllServiceTableAssignments() {
  Object.keys(SERVICE_RESOURCE_CONFIG).forEach(migrateServiceTableAssignments);
}
function serviceTableStatesForSelection(serviceId = ($('bookingService')?.value || currentBookingServiceId || 'nail-care')) {
  const cfg = serviceTableConfig(serviceId);
  migrateServiceTableAssignments(serviceId);
  const states = {};
  for (let i=1;i<=cfg.tables;i+=1) states[i]='free';
  const date = $('bookingDate')?.value || '';
  const time = $('bookingTime')?.value || '';
  if (!date || !time || !cfg.tables) return states;
  const service = SERVICE_DATA[serviceId];
  const selectedStart = new Date(`${date}T${time}:00`);
  if (Number.isNaN(selectedStart.getTime())) return states;
  const selectedEnd = new Date(selectedStart);
  selectedEnd.setMinutes(selectedEnd.getMinutes() + durationToMinutes(service.duration));
  const overlaps = appointmentStore()
    .filter(item => item.serviceId === serviceId && item.id !== editingAppointmentId && !appointmentIsDeclined(item.status))
    .filter(item => {
      const start = new Date(item.startAt || 0);
      const end = appointmentEndDate(item);
      return !Number.isNaN(start.getTime()) && end && intervalsOverlap(selectedStart, selectedEnd, start, end);
    })
    .sort((a,b) => new Date(a.startAt || 0) - new Date(b.startAt || 0));
  overlaps.forEach(item => {
    let assigned = Number(item.tableNumber);
    if (!(assigned >= 1 && assigned <= cfg.tables)) {
      assigned = Array.from({length:cfg.tables},(_,i)=>i+1).find(n => states[n] === 'free');
    }
    if (!(assigned >= 1 && assigned <= cfg.tables)) return;
    const nextState = appointmentIsAccepted(item.status) ? 'confirmed' : 'pending';
    if (states[assigned] !== 'confirmed') states[assigned] = nextState;
  });
  return states;
}
function serviceTableOccupancyForSelection(serviceId = ($('bookingService')?.value || currentBookingServiceId || 'nail-care')) {
  const states = serviceTableStatesForSelection(serviceId);
  return new Set(Object.entries(states).filter(([,state]) => state !== 'free').map(([no]) => Number(no)));
}
function renderServiceTableStatus() {
  const serviceId = $('bookingService')?.value || currentBookingServiceId || 'nail-care';
  const cfg = serviceTableConfig(serviceId);
  if (!serviceTableStatusWrap || !serviceTableStatusRow) return;
  serviceTableStatusWrap.classList.toggle('is-hidden', !cfg.tables);
  if (!cfg.tables) return;
  const states = serviceTableStatesForSelection(serviceId);
  const serviceName = SERVICE_DATA[serviceId]?.title || 'dịch vụ';
  if (serviceTableStatusLabel) serviceTableStatusLabel.textContent = `Tình trạng ${cfg.label}`;
  serviceTableStatusRow.setAttribute('aria-label', `Tình trạng ${cfg.tables} bàn của dịch vụ ${serviceName}`);
  serviceTableStatusRow.style.gridTemplateColumns = `repeat(${cfg.tables}, minmax(0, 1fr))`;
  serviceTableStatusRow.innerHTML = Array.from({length:cfg.tables},(_,i)=>i+1).map(no => {
    const state = states[no] || 'free';
    const label = state === 'confirmed' ? 'chủ đã xác nhận lịch' : state === 'pending' ? 'đã có khách đặt, chờ chủ xác nhận' : 'đang trống';
    return `<span class="nail-table-chip ${state}" data-service-table="${no}" aria-label="Bàn ${no}: ${label}"><i></i><b>BÀN ${no}</b></span>`;
  }).join('');
  const values = Object.values(states);
  const freeCount = values.filter(v => v === 'free').length;
  const pendingCount = values.filter(v => v === 'pending').length;
  const confirmedCount = values.filter(v => v === 'confirmed').length;
  if (serviceTableStatusHint) {
    serviceTableStatusHint.textContent = `Xanh: trống • Vàng cam: chờ xác nhận • Đỏ: đã xác nhận. Hiện còn ${freeCount}/${cfg.tables} bàn trống; ${pendingCount} bàn chờ xác nhận và ${confirmedCount} bàn đã được chủ chốt lịch.`;
  }
}
function firstFreeServiceTable(serviceId) {
  const cfg = serviceTableConfig(serviceId);
  const states = serviceTableStatesForSelection(serviceId);
  return Array.from({length:cfg.tables},(_,i)=>i+1).find(n => states[n] === 'free') || null;
}

function updateBookingSummary() {
  const serviceId = $('bookingService')?.value || 'nail-care';
  currentBookingServiceId = serviceId;
  const service = SERVICE_DATA[serviceId] || SERVICE_DATA['nail-care'];
  if ($('bookingChosenServiceName')) {
    $('bookingChosenServiceName').textContent = service.title || 'Dịch vụ';
    $('bookingChosenServiceName').classList.toggle('booking-goi-title', serviceId === 'goi-duong-sinh');
  }
  if ($('bookingChosenServiceText')) $('bookingChosenServiceText').textContent = service.summary || service.description || '';
  if ($('bookingChosenServicePrice')) $('bookingChosenServicePrice').textContent = service.price || '';
  if ($('bookingChosenServiceDuration')) $('bookingChosenServiceDuration').textContent = service.duration || '';
  renderBookingTimingBreakdownV60(service);
  bookingServiceCards.forEach(card => card.classList.toggle('is-active', card.dataset.bookingService === serviceId));
  if (bookingNailPickerWrap) bookingNailPickerWrap.classList.toggle('is-hidden', serviceId !== 'nail-care');
  refreshBookingTimeOptions(true);

  const time = $('bookingTime')?.value || '';
  let endText = '--:--';
  if (time) {
    const [hour, minute] = time.split(':').map(Number);
    const start = new Date();
    start.setHours(hour || 0, minute || 0, 0, 0);
    start.setMinutes(start.getMinutes() + durationToMinutes(service.duration));
    endText = formatTimeFromDate(start);
  }
  if ($('bookingEndTime')) $('bookingEndTime').value = endText;
  renderServiceTableStatus();
  updateWaitlistMenu();
}
function setDefaultBookingDate() {
  const input = $('bookingDate');
  if (!input) return;
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth()+1).padStart(2,'0');
  const dd = String(now.getDate()).padStart(2,'0');
  const min = `${yyyy}-${mm}-${dd}`;
  input.min = min;
  if (!input.value) input.value = min;
}
function managerBookingCustomerOptions(query='') {
  const normalizedQuery = String(query || '').trim().toLocaleLowerCase('vi-VN');
  return customerAccountsList().filter(acc => {
    if (!normalizedQuery) return true;
    const name = String(acc.name || '').toLocaleLowerCase('vi-VN');
    const phone = normalizePhone(acc.phone || '');
    const queryPhone = normalizePhone(normalizedQuery);
    return name.includes(normalizedQuery) || (queryPhone && phone.includes(queryPhone));
  });
}
function renderManagerBookingCustomerOptions(query='') {
  if (!managerBookingCustomerSelect) return;
  const rows = managerBookingCustomerOptions(query);
  const previous = managerSelectedCustomerPhone || managerBookingCustomerSelect.value || '';
  managerBookingCustomerSelect.innerHTML = '<option value="">— Chọn khách có tài khoản —</option>' + rows.map(acc => {
    const phone = normalizePhone(acc.phone || '');
    const gender = normalizeCustomerGender(acc.gender || '');
    return `<option value="${escapeUiText(phone)}">${escapeUiText(acc.name || 'Khách hàng')} • ${escapeUiText(phone)}${gender ? ` • ${escapeUiText(gender)}` : ''}</option>`;
  }).join('');
  if (previous && rows.some(acc => normalizePhone(acc.phone || '') === previous)) {
    managerBookingCustomerSelect.value = previous;
    managerSelectedCustomerPhone = previous;
  } else if (previous && String(query || '').trim()) {
    managerSelectedCustomerPhone = '';
    managerBookingCustomerSelect.value = '';
  }
  renderManagerBookingSelectedCustomer();
}
function renderManagerBookingSelectedCustomer() {
  if (!managerBookingSelectedCustomer) return;
  const account = managerSelectedCustomerPhone ? customerAccountByPhone(managerSelectedCustomerPhone) : null;
  if (!account) {
    managerBookingSelectedCustomer.className = 'manager-booking-selected-customer';
    managerBookingSelectedCustomer.textContent = 'Chưa chọn khách hàng.';
    return;
  }
  managerBookingSelectedCustomer.className = 'manager-booking-selected-customer is-selected';
  managerBookingSelectedCustomer.innerHTML = `<strong>${escapeUiText(account.name || 'Khách hàng')}</strong><span>${escapeUiText(normalizePhone(account.phone || ''))}${account.gender ? ` • ${escapeUiText(account.gender)}` : ''}${account.address ? ` • ${escapeUiText(account.address)}` : ''}</span><small>Lịch sẽ liên kết trực tiếp với tài khoản này và xuất hiện trong “Lịch của tôi”.</small>`;
}
function setManagerBookingMode(mode='registered') {
  managerBookingMode = mode === 'guest' ? 'guest' : 'registered';
  document.querySelectorAll('[data-manager-booking-mode]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.managerBookingMode === managerBookingMode));
  if (managerBookingRegisteredPane) { managerBookingRegisteredPane.hidden = managerBookingMode !== 'registered'; managerBookingRegisteredPane.classList.toggle('is-active', managerBookingMode === 'registered'); }
  if (managerBookingGuestPane) { managerBookingGuestPane.hidden = managerBookingMode !== 'guest'; managerBookingGuestPane.classList.toggle('is-active', managerBookingMode === 'guest'); }
  if (managerBookingSourceBadge) managerBookingSourceBadge.textContent = managerBookingMode === 'guest' ? 'KHÁCH VÃNG LAI' : 'QUẢN LÝ ĐẶT HỘ';
  const msg = $('bookingMessage'); if (msg) msg.textContent = '';
}
function resetManagerBookingCustomerPanel() {
  managerBookingMode = 'registered';
  managerSelectedCustomerPhone = '';
  if (managerBookingCustomerSearch) managerBookingCustomerSearch.value = '';
  if (managerBookingCustomerSelect) managerBookingCustomerSelect.value = '';
  if ($('managerGuestName')) $('managerGuestName').value = '';
  if ($('managerGuestPhone')) $('managerGuestPhone').value = '';
  if ($('managerGuestGender')) $('managerGuestGender').value = '';
  if ($('managerGuestAddress')) $('managerGuestAddress').value = '';
  setManagerBookingMode('registered');
  renderManagerBookingCustomerOptions('');
}
function managerBookingCustomerContext() {
  if (managerBookingMode === 'registered') {
    const account = customerAccountByPhone(managerSelectedCustomerPhone || managerBookingCustomerSelect?.value || '');
    if (!account) return {valid:false, message:'Vui lòng chọn đúng khách hàng có tài khoản trước khi đăng ký lịch.'};
    const phone = normalizePhone(account.phone || '');
    return {
      valid:true, hasAccount:true, source:'manager-account', sourceLabel:'Quản lý đặt hộ',
      customerId: account.customerId || customerIdForPhone(phone),
      name: account.name || 'Khách hàng', phone,
      address: account.address || '', gender: normalizeCustomerGender(account.gender || '')
    };
  }
  const name = String($('managerGuestName')?.value || '').trim();
  const phone = normalizePhone($('managerGuestPhone')?.value || '');
  const gender = normalizeCustomerGender($('managerGuestGender')?.value || '');
  const address = String($('managerGuestAddress')?.value || '').trim();
  if (name.length < 2) return {valid:false,message:'Vui lòng nhập họ tên khách vãng lai.'};
  if (!isValidPhone(phone)) return {valid:false,message:'Vui lòng nhập số điện thoại hợp lệ để lưu lịch sử và tránh trùng khách.'};
  const linked = customerAccountByPhone(phone);
  if (linked) return {valid:false,message:`Số ${phone} đã có tài khoản Khách hàng (${linked.name}). Hãy chuyển sang “Khách có tài khoản” để lịch liên kết đúng hồ sơ.`};
  if (!gender) return {valid:false,message:'Vui lòng chọn giới tính để hệ thống có thể cá nhân hóa chăm sóc khách sau này.'};
  return {
    valid:true, hasAccount:false, source:'walk-in', sourceLabel:'Khách vãng lai',
    customerId: customerIdForPhone(phone), guestId:`guest-${phone}`,
    name, phone, address, gender
  };
}
function bookingSourceLabel(item={}) {
  if (item.bookingSource === 'manager-account') return 'Quản lý đặt hộ';
  if (item.bookingSource === 'walk-in') return 'Khách vãng lai';
  return 'APP khách';
}
function managerBookingNextAvailableTimes(serviceId,date,limit=3) {
  migrateServiceTableAssignments(serviceId);
  const service = SERVICE_DATA[serviceId];
  const cfg = serviceTableConfig(serviceId);
  if (!service || !date || !cfg.tables) return [];
  const duration = durationToMinutes(service.duration);
  const hours = shopHoursForDate(date);
  const open = minutesFromTime(hours.open), close = minutesFromTime(hours.close);
  const now = new Date();
  const today = localDateISO(now);
  const minToday = today === date ? now.getHours()*60 + now.getMinutes() : open;
  const startFloor = Math.max(open, minToday);
  const first = Math.ceil(startFloor/5)*5;
  const appointments = appointmentStore().filter(item => item.serviceId === serviceId && !appointmentIsDeclined(item.status));
  const output=[];
  for (let minute=first; minute+duration<=close && output.length<limit; minute+=5) {
    const time=timeFromMinutes(minute);
    const start=new Date(`${date}T${time}:00`); const end=new Date(start); end.setMinutes(end.getMinutes()+duration);
    const occupied=new Set();
    appointments.forEach(item=>{
      const aStart=new Date(item.startAt||0), aEnd=appointmentEndDate(item);
      if(Number.isNaN(aStart.getTime())||!aEnd||!intervalsOverlap(start,end,aStart,aEnd))return;
      const no=Number(item.tableNumber); if(no>=1&&no<=cfg.tables) occupied.add(no);
    });
    if (occupied.size < cfg.tables) output.push(time);
  }
  return output;
}
function setManagerBookingNow() {
  if (bookingContextRole !== 'manager') return;
  const date = localDateISO();
  if ($('bookingDate')) $('bookingDate').value = date;
  managerBookingImmediateMode = true;
  refreshBookingTimeOptions(false);
  const now = new Date();
  const rounded = Math.ceil((now.getHours()*60 + now.getMinutes())/5)*5;
  const service = SERVICE_DATA[$('bookingService')?.value || currentBookingServiceId || 'nail-care'];
  const check = validateBookingWithinShopHours(date,timeFromMinutes(rounded),durationToMinutes(service?.duration || '60 phút'));
  if (!check.valid) {
    managerBookingImmediateMode = false;
    $('bookingMessage').textContent = `Hiện tại không còn đủ thời gian để hoàn thành dịch vụ trước giờ đóng cửa ${check.hours.close}. Hãy chọn khung giờ/ngày khác.`;
    return;
  }
  const select=$('bookingTime');
  const time=timeFromMinutes(rounded);
  if (select && ![...select.options].some(opt=>opt.value===time)) select.add(new Option(`${time} • hiện tại`,time),0);
  if (select) select.value=time;
  updateBookingSummary();
  if (select) select.value=time;
  const [h,m]=time.split(':').map(Number); const end=new Date(); end.setHours(h,m,0,0); end.setMinutes(end.getMinutes()+durationToMinutes(service?.duration||'60 phút'));
  if ($('bookingEndTime')) $('bookingEndTime').value=formatTimeFromDate(end);
  $('bookingMessage').textContent = `Đã chọn “Dùng dịch vụ ngay” lúc ${time}. Hệ thống sẽ kiểm tra bàn trống lần cuối khi bạn xác nhận.`;
}

function openBookingModal(serviceId='nail-care') {
  const session = getSession();
  if (!session) {
    openAuth('Khách hàng');
    goLogin();
    showToast('Vui lòng đăng nhập tài khoản Khách hàng để đặt lịch.');
    return;
  }
  if (!['Khách hàng','Quản lý'].includes(session.role)) {
    showToast('Hiện tại chức năng đăng ký lịch hỗ trợ tài khoản Khách hàng và Quản lý.');
    return;
  }
  if (!bookingBackdrop) return;
  bookingContextRole = session.role === 'Quản lý' ? 'manager' : 'customer';
  managerBookingImmediateMode = false;
  currentBookingServiceId = SERVICE_DATA[serviceId] ? serviceId : 'nail-care';
  editingAppointmentId = null;
  setDefaultBookingDate();
  $('bookingService').value = currentBookingServiceId;
  refreshBookingTimeOptions(false);
  $('bookingNote').value = '';
  if ($('bookingNailSample')) $('bookingNailSample').value = '';
  if ($('bookingNailSampleName')) $('bookingNailSampleName').textContent = 'Chưa chọn mẫu móng';
  if ($('bookingNailThumb')) $('bookingNailThumb').hidden = true;
  $('bookingMessage').textContent = '';
  if (managerBookingCustomerPanel) managerBookingCustomerPanel.hidden = bookingContextRole !== 'manager';
  if (managerBookNowBtn) managerBookNowBtn.hidden = bookingContextRole !== 'manager';
  if ($('bookingModalTitle')) $('bookingModalTitle').textContent = bookingContextRole === 'manager' ? 'Đăng ký lịch cho khách' : 'Đặt lịch dịch vụ';
  const subtitle = document.querySelector('.booking-subtitle');
  if (subtitle) subtitle.textContent = bookingContextRole === 'manager'
    ? 'Quản lý tạo lịch cho khách có tài khoản hoặc khách vãng lai. Lịch được xác nhận ngay và chiếm tài nguyên thực tế của tiệm.'
    : 'Chọn dịch vụ, ngày giờ phù hợp và gửi lịch hẹn tới tiệm. Cửa sổ này dành riêng cho khách đã đăng nhập.';
  const kicker = document.querySelector('.booking-kicker small');
  if (kicker) kicker.textContent = bookingContextRole === 'manager' ? 'ĐĂNG KÝ LỊCH TẠI QUẦY' : 'ĐẶT LỊCH KHÁCH HÀNG';
  if (bookingSubmitBtn) bookingSubmitBtn.innerHTML = bookingContextRole === 'manager' ? 'Xác nhận đăng ký lịch <span>→</span>' : 'Xác nhận đặt lịch <span>→</span>';
  if (bookingContextRole === 'manager') resetManagerBookingCustomerPanel();
  updateBookingSummary();
  toggleMenu(false);
  toggleNotificationPanel(false);
  bookingBackdrop.classList.add('open');
  bookingBackdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => bookingContextRole === 'manager' ? managerBookingCustomerSearch?.focus() : $('bookingDate')?.focus(), 80);
}

function setBookingService(serviceId='nail-care') {
  const serviceInput = $('bookingService');
  if (!serviceInput) return;
  serviceInput.value = SERVICE_DATA[serviceId] ? serviceId : 'nail-care';
  updateBookingSummary();
}

function closeBookingModal() {
  if (!bookingBackdrop) return;
  bookingBackdrop.classList.remove('open');
  bookingBackdrop.setAttribute('aria-hidden','true');
  if ($('bookingModalTitle')) $('bookingModalTitle').textContent = 'Đặt lịch dịch vụ';
  const subtitle = document.querySelector('.booking-subtitle');
  if (subtitle) subtitle.textContent = 'Chọn dịch vụ, ngày giờ phù hợp và gửi lịch hẹn tới tiệm. Cửa sổ này dành riêng cho khách đã đăng nhập.';
  const kicker = document.querySelector('.booking-kicker small');
  if (kicker) kicker.textContent = 'ĐẶT LỊCH KHÁCH HÀNG';
  if (managerBookingCustomerPanel) managerBookingCustomerPanel.hidden = true;
  if (managerBookNowBtn) managerBookNowBtn.hidden = true;
  if (bookingSubmitBtn) bookingSubmitBtn.innerHTML = 'Xác nhận đặt lịch <span>→</span>';
  bookingContextRole = 'customer';
  managerBookingImmediateMode = false;
  editingAppointmentId = null;
  document.body.style.overflow = '';
}
function createBookingNotification(appointment) {
  const data = notificationStore();
  data.unshift({
    id: `booking-${appointment.id}`,
    recipientPhone: normalizePhone(appointment.customerPhone),
    type: 'booking',
    sender: salonName,
    title: `Đã tiếp nhận lịch hẹn ${appointment.serviceName}`,
    message: `Lịch hẹn ${appointment.serviceName} vào ${appointment.displayDate} lúc ${appointment.displayTime} đã được tạo.`,
    content: `Beauty Moment đã tiếp nhận lịch hẹn của bạn.

Dịch vụ: ${appointment.serviceName}
Ngày hẹn: ${appointment.displayDate}
Giờ bắt đầu: ${appointment.displayTime}
Giờ kết thúc dự kiến: ${appointment.displayEndTime}
Nhân viên: ${appointment.employeeName || 'Tiệm sẽ sắp xếp nhân viên phù hợp'}
Ghế / vị trí: ${appointment.seatPreference || 'Tiệm tự sắp xếp ghế'}${appointment.nailSample ? `
Mẫu móng tham khảo: ${appointment.nailSample}` : ''}${appointment.note ? `
Ghi chú: ${appointment.note}` : ''}

Vui lòng đến đúng giờ hoặc theo dõi thêm thông báo từ tiệm tại biểu tượng chuông.`,
    createdAt: new Date().toISOString(),
    read: false
  });
  saveNotificationStore(data);
  renderNotifications();
  renderManagerServiceControls();
}


function createManagerBookingNotification(appointment, mode='new') {
  if (!appointment) return;
  const data = notificationStore();
  const isUpdate = mode === 'updated';
  data.unshift({
    id: `manager-${isUpdate ? 'change' : 'booking'}-${appointment.id}-${Date.now()}`,
    recipientPhone: '*',
    recipientRole: 'Quản lý',
    appointmentId: appointment.id,
    type: 'booking',
    sender: appointment.customerName || 'Khách hàng',
    title: isUpdate ? `Khách yêu cầu đổi lịch ${appointment.serviceName}` : `Lịch mới: ${appointment.serviceName}`,
    message: `${appointment.customerName || 'Khách hàng'} • ${appointment.displayDate} • ${appointment.displayTime}–${appointment.displayEndTime}`,
    content: `${isUpdate ? 'KHÁCH HÀNG VỪA GỬI YÊU CẦU ĐỔI LỊCH' : 'KHÁCH HÀNG VỪA ĐẶT LỊCH MỚI'}\n\nKhách hàng: ${appointment.customerName || ''}\nGiới tính: ${appointment.customerGender || managerCustomerGender(appointment)}\nSố điện thoại: ${appointment.customerPhone || ''}\nĐịa chỉ: ${appointment.customerAddress || managerCustomerAddress(appointment)}\nDịch vụ: ${appointment.serviceName || ''}\nNgày hẹn: ${appointment.displayDate || ''}\nGiờ bắt đầu: ${appointment.displayTime || ''}\nGiờ kết thúc dự kiến: ${appointment.displayEndTime || ''}\nThời lượng: ${appointment.duration || ''}\nGiá dịch vụ: ${appointment.price || ''}${appointment.tableNumber ? `\nBàn hệ thống tạm giữ: BÀN ${appointment.tableNumber}` : ''}${appointment.nailSample ? `\nMẫu móng: ${appointment.nailSample}` : ''}${appointment.note ? `\nGhi chú của khách: ${appointment.note}` : ''}\n\nTrạng thái hiện tại: Chờ xác nhận.`,
    createdAt: new Date().toISOString(),
    read: false
  });
  saveNotificationStore(data);
  renderNotifications();
}
function createCustomerDecisionNotification(appointment, decision) {
  if (!appointment) return;
  const accepted = decision === 'accept';
  const data = notificationStore();
  const id = `decision-${appointment.id}-${accepted ? 'accepted' : 'declined'}`;
  const salonName = salonProfile().name || 'Beauty Moment';
  const pronoun = customerPronounForAppointment(appointment);
  const pronounTitle = pronoun.charAt(0).toLocaleUpperCase('vi-VN') + pronoun.slice(1);
  const givenName = customerGivenName(appointment.customerName || '');
  const greetingName = givenName && givenName.toLocaleLowerCase('vi-VN') !== 'bạn' ? ` ${givenName}` : '';
  const notification = {
    id,
    recipientPhone: normalizePhone(appointment.customerPhone),
    recipientRole: 'Khách hàng',
    appointmentId: appointment.id,
    type: 'booking',
    sender: salonName,
    title: accepted ? `Tiệm đã nhận lịch ${appointment.serviceName}` : `Tiệm từ chối lịch ${appointment.serviceName}`,
    message: accepted
      ? `Lịch ${appointment.displayDate} lúc ${appointment.displayTime} đã được Chủ tiệm xác nhận.`
      : `Lịch ${appointment.displayDate} lúc ${appointment.displayTime} chưa thể được tiệm tiếp nhận.`,
    content: accepted
      ? `XÁC NHẬN LỊCH HẸN\n\n${salonName} đã đồng ý nhận lịch của bạn.\n\nDịch vụ: ${appointment.serviceName}\nNgày hẹn: ${appointment.displayDate}\nGiờ bắt đầu: ${appointment.displayTime}\nGiờ kết thúc dự kiến: ${appointment.displayEndTime}${appointment.tableNumber ? `\nBàn phục vụ: BÀN ${appointment.tableNumber}` : ''}\n\nTrạng thái: Đã nhận lịch. Bạn có thể mở “Lịch của tôi” để theo dõi.`
      : `THÔNG BÁO TỪ CHỐI LỊCH\n\n${salonName} rất tiếc chưa thể tiếp nhận lịch này.\n\nDịch vụ: ${appointment.serviceName}\nNgày hẹn: ${appointment.displayDate}\nGiờ bắt đầu: ${appointment.displayTime}\n\nLịch bị từ chối sẽ tự động không còn hiển thị trong “Lịch của tôi”. Bạn có thể đặt lại một khung giờ khác.`,
    audioText: accepted ? '' : `Em chào ${pronoun}${greetingName} ạ. ${salonName} cảm ơn ${pronoun} đã đặt lịch. Rất tiếc khung giờ ${appointment.displayTime} ngày ${appointment.displayDate} cho dịch vụ ${appointment.serviceName} hiện bên em đang kín lịch nên chưa thể nhận lịch của ${pronoun} được. ${pronounTitle} thông cảm giúp em nhé. ${pronounTitle} có thể chọn giúp bên em một khung giờ gần nhất khác. ${salonName} rất hy vọng sớm được phục vụ ${pronoun} ạ. Cảm ơn ${pronoun} nhiều.`,
    createdAt: new Date().toISOString(),
    read: false
  };
  const idx = data.findIndex(item => item.id === id);
  if (idx >= 0) data[idx] = notification; else data.unshift(notification);
  saveNotificationStore(data);
}

function setNotificationTab(tab) {
  currentNotificationTab = tab === 'read' ? 'read' : 'unread';
  const unreadActive = currentNotificationTab === 'unread';
  notificationUnreadTab?.classList.toggle('active', unreadActive);
  notificationReadTab?.classList.toggle('active', !unreadActive);
  notificationUnreadTab?.setAttribute('aria-selected', String(unreadActive));
  notificationReadTab?.setAttribute('aria-selected', String(!unreadActive));
  renderNotifications();
}

let activeSpeechNotificationId = null;
function findVietnameseVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  return voices.find(v => /^vi(-|_)/i.test(v.lang || ''))
    || voices.find(v => /Vietnam|Tiếng Việt|Vietnamese/i.test(`${v.name || ''} ${v.lang || ''}`))
    || null;
}
function stopNotificationSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  activeSpeechNotificationId = null;
  document.querySelectorAll('.notification-audio-btn.is-playing').forEach(btn => {
    btn.classList.remove('is-playing');
    btn.setAttribute('aria-label', 'Nghe thông báo bằng giọng nói');
    const label = btn.querySelector('.notification-audio-label');
    if (label) label.textContent = 'Nghe';
  });
}
function speakNotification(item, button) {
  if (!item?.audioText) return;
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    showToast('Trình duyệt này chưa hỗ trợ đọc thông báo bằng giọng nói.');
    return;
  }
  if (activeSpeechNotificationId === item.id && window.speechSynthesis.speaking) {
    stopNotificationSpeech();
    return;
  }
  stopNotificationSpeech();
  const utterance = new SpeechSynthesisUtterance(item.audioText);
  utterance.lang = 'vi-VN';
  const warmVoice = item.voiceStyle === 'warm';
  utterance.rate = warmVoice ? 0.88 : 0.94;
  utterance.pitch = warmVoice ? 0.94 : 1.02;
  utterance.volume = 1;
  const voice = findVietnameseVoice();
  if (voice) utterance.voice = voice;
  activeSpeechNotificationId = item.id;
  if (button) {
    button.classList.add('is-playing');
    button.setAttribute('aria-label', 'Dừng đọc thông báo');
    const label = button.querySelector('.notification-audio-label');
    if (label) label.textContent = 'Dừng';
  }
  const reset = () => stopNotificationSpeech();
  utterance.onend = reset;
  utterance.onerror = reset;
  window.speechSynthesis.speak(utterance);
}

function renderNotifications() {
  const session = getSession();
  if (!session || !notificationEnabledForRole(session.role)) {
    notificationWrap.hidden = true;
    notificationPanel.classList.remove('open');
    notificationPanel.setAttribute('aria-hidden','true');
    notificationBtn.setAttribute('aria-expanded','false');
    renderCustomerNavCounters(session);
    return;
  }
  notificationWrap.hidden = false;
  if (session.role === 'Khách hàng') {
    ensureNotificationDetails(session);
  } else if (session.role === 'Quản lý') {
    ensureManagerNotificationDetails(session);
  }

  const items = notificationsForSession(session);
  renderCustomerNavCounters(session);
  const unreadItems = items.filter(item => !item.read);
  const readItems = items.filter(item => item.read);
  const unread = unreadItems.length;
  const read = readItems.length;

  notificationBadge.hidden = unread === 0;
  notificationBadge.textContent = unread > 99 ? '99+' : String(unread);
  notificationSummary.textContent = unread ? `${unread} chưa xem • ${read} đã xem` : `0 chưa xem • ${read} đã xem`;
  markAllReadBtn.hidden = unread === 0;
  if (notificationUnreadCount) notificationUnreadCount.textContent = String(unread);
  if (notificationReadCount) notificationReadCount.textContent = String(read);

  const visibleItems = currentNotificationTab === 'read' ? readItems : unreadItems;
  if (!visibleItems.length) {
    notificationList.innerHTML = currentNotificationTab === 'read'
      ? '<div class="notification-empty-tab"><span>♡</span><strong>Chưa có thông báo đã xem</strong><small>Những thông báo bạn mở xem chi tiết sẽ tự động chuyển sang đây.</small></div>'
      : '<div class="notification-empty-tab"><span>✓</span><strong>Bạn đã xem hết thông báo mới</strong><small>Khi có thông báo mới từ tiệm, chúng sẽ xuất hiện trong tab “Chưa xem”.</small></div>';
    return;
  }

  notificationList.innerHTML = visibleItems.map(item => `
    <article class="notification-item ${item.read ? '' : 'unread'} ${item.audioText ? 'has-audio' : ''}">
      <button class="notification-item-main" type="button" data-notification-id="${item.id}">
        <span class="notification-item-icon">${notificationIcon(item.type)}</span>
        <span class="notification-item-copy">
          <strong>${item.title}</strong>
          <p>${item.message}</p>
          <time>${notificationTime(item.createdAt)}</time>
        </span>
      </button>
      <div class="notification-item-actions">
        ${item.audioText ? `<button class="notification-audio-btn" type="button" data-notification-audio="${item.id}" aria-label="Nghe thông báo bằng giọng nói"><span class="notification-audio-icon">🔊</span><span class="notification-audio-label">Nghe</span></button>` : ''}
        ${item.actionType === 'reoffer-confirm' ? `<button class="notification-reoffer-confirm-btn" type="button" data-notification-reoffer-confirm="${item.id}">Xác nhận</button>` : ''}
      </div>
    </article>
  `).join('');

  notificationList.querySelectorAll('[data-notification-id]').forEach(btn => btn.addEventListener('click', () => {
    const data = notificationStore();
    const item = data.find(n => n.id === btn.dataset.notificationId);
    if (!item) return;
    if (!item.read) {
      item.read = true;
      saveNotificationStore(data);
      // Giữ tab Chưa xem: thông báo vừa mở tự biến mất khỏi tab này và chuyển sang Đã xem.
      renderNotifications();
    }
    openNotificationDetail(item);
  }));
  notificationList.querySelectorAll('[data-notification-audio]').forEach(btn => btn.addEventListener('click', (event) => {
    event.stopPropagation();
    const item = notificationStore().find(n => n.id === btn.dataset.notificationAudio);
    if (!item) return;
    speakNotification(item, btn);
  }));
  notificationList.querySelectorAll('[data-notification-reoffer-confirm]').forEach(btn => btn.addEventListener('click', (event) => {
    event.stopPropagation();
    confirmReofferFromNotification(btn.dataset.notificationReofferConfirm);
  }));
}

function toggleNotificationPanel(force) {
  const session = getSession();
  if (!session || !notificationEnabledForRole(session.role)) return;
  const open = typeof force === 'boolean' ? force : !notificationPanel.classList.contains('open');
  if (open) {
    loginMenu.classList.remove('open');
    profileMenu.classList.remove('open');
    loginMenu.setAttribute('aria-hidden','true');
    profileMenu.setAttribute('aria-hidden','true');
    loginMenuBtn.setAttribute('aria-expanded','false');
    currentNotificationTab = 'unread';
    notificationUnreadTab?.classList.add('active');
    notificationReadTab?.classList.remove('active');
    notificationUnreadTab?.setAttribute('aria-selected','true');
    notificationReadTab?.setAttribute('aria-selected','false');
    renderNotifications();
  }
  notificationPanel.classList.toggle('open', open);
  notificationPanel.setAttribute('aria-hidden', String(!open));
  notificationBtn.setAttribute('aria-expanded', String(open));
}

function customerAccountsList() {
  const seen = new Set();
  return Object.values(accounts())
    .filter(acc => acc && acc.role === 'Khách hàng' && acc.phone)
    .filter(acc => {
      const phone = normalizePhone(acc.phone || '');
      if (!phone || seen.has(phone)) return false;
      seen.add(phone);
      return true;
    })
    .sort((a,b) => String(a.name || '').localeCompare(String(b.name || ''), 'vi'));
}

// =========================
// VISION 52 — CUSTOMER CRM
// =========================
const CUSTOMER_TIER_CRITERIA_KEY = 'beauty_customer_tier_criteria_v52';
const DEFAULT_CUSTOMER_TIER_CRITERIA = [
  {id:'diamond', label:'Kim cương', minVisits:10, minSpend:3000000, maxDaysSinceVisit:120, note:'Khách thân thiết giá trị cao trong 12 tháng gần nhất'},
  {id:'gold', label:'Vàng', minVisits:5, minSpend:1200000, maxDaysSinceVisit:180, note:'Khách quay lại đều và có mức chi tiêu tốt'},
  {id:'silver', label:'Bạc', minVisits:1, minSpend:0, maxDaysSinceVisit:3650, note:'Đã có ít nhất một lịch Hoàn thành'}
];
let customerProfilePhone = '';
function customerIdForPhone(phone='') {
  const normalized = normalizePhone(phone || '');
  return normalized ? `customer-${normalized}` : '';
}
function ensureCustomerIdentityV52() {
  const data = accounts();
  let accountChanged = false;
  Object.entries(data).forEach(([key,acc]) => {
    if (!acc || acc.role !== 'Khách hàng' || !acc.phone) return;
    if (!acc.customerId) { acc.customerId = customerIdForPhone(acc.phone); accountChanged = true; }
    data[key] = acc;
  });
  if (accountChanged) saveAccounts(data);
  const appts = appointmentStore();
  let apptChanged = false;
  appts.forEach(item => {
    if (!item?.customerPhone) return;
    if (!item.customerId) { item.customerId = customerIdForPhone(item.customerPhone); apptChanged = true; }
  });
  if (apptChanged) saveAppointmentStore(appts);
}
function customerTierCriteriaStore() {
  try {
    const raw = JSON.parse(localStorage.getItem(CUSTOMER_TIER_CRITERIA_KEY) || 'null');
    if (Array.isArray(raw) && raw.length) return raw;
  } catch {}
  localStorage.setItem(CUSTOMER_TIER_CRITERIA_KEY, JSON.stringify(DEFAULT_CUSTOMER_TIER_CRITERIA));
  return DEFAULT_CUSTOMER_TIER_CRITERIA.map(item=>({...item}));
}
function saveCustomerTierCriteriaStore(items=[]) {
  localStorage.setItem(CUSTOMER_TIER_CRITERIA_KEY, JSON.stringify(Array.isArray(items) ? items : []));
}
function customerCompletedAppointments(phone='') {
  const normalized = normalizePhone(phone || '');
  return appointmentStore()
    .filter(item => normalizePhone(item.customerPhone || '') === normalized)
    .filter(item => Boolean(item.completed) && !appointmentIsDeclined(item.status))
    .filter(item => !Number.isNaN(new Date(item.startAt || item.completedAt || 0).getTime()))
    .sort((a,b)=>new Date(a.startAt || a.completedAt || 0)-new Date(b.startAt || b.completedAt || 0));
}
function customerDaysSince(dateValue) {
  const date = new Date(dateValue || 0);
  if (Number.isNaN(date.getTime())) return Infinity;
  const now = new Date();
  const today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const target = new Date(date.getFullYear(),date.getMonth(),date.getDate());
  return Math.max(0,Math.floor((today-target)/86400000));
}
function customerMoneyFromAppointment(item={}) {
  return revenueParseMoney(item.price || SERVICE_DATA[item.serviceId]?.price || 0);
}
function customerBehaviorCode(completed=[], firstDate=null, lastDate=null) {
  if (!completed.length) return {code:'none',label:'Chưa phát sinh'};
  const now = new Date();
  const isNewMonth = firstDate && firstDate.getFullYear()===now.getFullYear() && firstDate.getMonth()===now.getMonth();
  if (completed.length === 1) return {code:isNewMonth?'new':'one', label:isNewMonth?'Khách mới':'Khách 1 lần'};
  const days = lastDate ? customerDaysSince(lastDate) : Infinity;
  if (days > 60) return {code:'dormant',label:'Lâu chưa quay lại'};
  if (completed.length >= 6) return {code:'frequent',label:'Khách thường xuyên'};
  return {code:'returning',label:'Khách quay lại'};
}
function customerTierForRecord({rollingVisits=0,rollingSpend=0,daysSinceLast=Infinity}={}) {
  if (!rollingVisits) return 'Chưa xếp hạng';
  const criteria = customerTierCriteriaStore();
  const preferred = ['Kim cương','Vàng','Bạc'];
  const sorted = criteria.slice().sort((a,b)=>{
    const ia=preferred.indexOf(a.label), ib=preferred.indexOf(b.label);
    return (ia<0?999:ia)-(ib<0?999:ib);
  });
  for (const rule of sorted) {
    if (rollingVisits >= Math.max(0,Number(rule.minVisits)||0)
      && rollingSpend >= Math.max(0,Number(rule.minSpend)||0)
      && daysSinceLast <= Math.max(0,Number(rule.maxDaysSinceVisit)||0)) return rule.label;
  }
  return 'Chưa xếp hạng';
}
function customerCrmRecords() {
  const accountMap = new Map();
  customerAccountsList().forEach(acc=>accountMap.set(normalizePhone(acc.phone||''),{...acc,hasAccount:true}));
  appointmentStore().forEach(item=>{
    const phone=normalizePhone(item?.customerPhone||'');
    if (!phone || accountMap.has(phone)) return;
    accountMap.set(phone,{role:'Khách hàng',phone,name:item.customerName||'Khách hàng',gender:item.customerGender||'',address:item.customerAddress||'',customerId:item.customerId||customerIdForPhone(phone),hasAccount:false});
  });
  const now = new Date();
  const rollingStart = new Date(now); rollingStart.setFullYear(rollingStart.getFullYear()-1);
  return [...accountMap.entries()].map(([phone,acc])=>{
    const completed = customerCompletedAppointments(phone);
    const first = completed.length ? new Date(completed[0].startAt || completed[0].completedAt || 0) : null;
    const last = completed.length ? new Date(completed[completed.length-1].startAt || completed[completed.length-1].completedAt || 0) : null;
    const totalSpend = completed.reduce((sum,item)=>sum+customerMoneyFromAppointment(item),0);
    const rolling = completed.filter(item=>new Date(item.startAt || item.completedAt || 0)>=rollingStart);
    const rollingSpend = rolling.reduce((sum,item)=>sum+customerMoneyFromAppointment(item),0);
    const daysSinceLast = last ? customerDaysSince(last) : Infinity;
    const behavior = customerBehaviorCode(completed,first,last);
    const ratings = completed.filter(item=>Boolean(item.ratingFinalized)).map(item=>Number(item.rating)||0).filter(r=>r>=1&&r<=5);
    const averageRating = ratings.length ? ratings.reduce((a,b)=>a+b,0)/ratings.length : 0;
    const serviceCounts = new Map();
    completed.forEach(item=>{
      const label=String(item.serviceName || SERVICE_DATA[item.serviceId]?.title || 'Dịch vụ').trim();
      serviceCounts.set(label,(serviceCounts.get(label)||0)+1);
    });
    const favoriteService = [...serviceCounts.entries()].sort((a,b)=>b[1]-a[1])[0]?.[0] || '—';
    const recentCareCutoff = new Date(now.getTime()-90*86400000);
    const careItems = completed.filter(item=>new Date(item.startAt || item.completedAt || 0)>=recentCareCutoff).filter(item=>{
      const lowRating = item.ratingFinalized && Number(item.rating)>0 && Number(item.rating)<=2;
      const negative = feedbackSentimentMeta(item).label === 'negative';
      return lowRating || negative;
    });
    const needsCare = careItems.length>0;
    const tier = customerTierForRecord({rollingVisits:rolling.length,rollingSpend,daysSinceLast});
    return {
      customerId:acc.customerId||customerIdForPhone(phone), phone,
      name:acc.name||completed[completed.length-1]?.customerName||'Khách hàng', gender:acc.gender||completed[completed.length-1]?.customerGender||'', address:acc.address||completed[completed.length-1]?.customerAddress||'', hasAccount:acc.hasAccount !== false,
      completed, firstDate:first,lastDate:last,totalVisits:completed.length,totalSpend,rollingVisits:rolling.length,rollingSpend,daysSinceLast,
      behaviorCode:behavior.code,behaviorLabel:behavior.label,tier,averageRating,ratingCount:ratings.length,favoriteService,needsCare,careItems
    };
  });
}
function customerTierClass(label='') {
  if (label==='Kim cương') return 'diamond';
  if (label==='Vàng') return 'gold';
  if (label==='Bạc') return 'silver';
  return 'none';
}
function customerDateLabel(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric'});
}
function renderCustomerTierCriteria() {
  if (!customerTierCriteriaBody) return;
  const data = customerTierCriteriaStore();
  customerTierCriteriaBody.innerHTML = data.map(item=>`<tr data-customer-tier-rule="${escapeUiText(item.id)}">
    <td><strong>${escapeUiText(item.label)}</strong></td>
    <td><input data-tier-field="minVisits" type="number" min="0" step="1" value="${Number(item.minVisits)||0}"></td>
    <td><input class="money-input" data-tier-field="minSpend" type="number" min="0" step="10000" value="${Number(item.minSpend)||0}"></td>
    <td><input data-tier-field="maxDaysSinceVisit" type="number" min="0" step="1" value="${Number(item.maxDaysSinceVisit)||0}"></td>
    <td><input data-tier-field="note" value="${escapeUiText(item.note||'')}" placeholder="Ghi chú"></td>
  </tr>`).join('');
  customerTierCriteriaBody.querySelectorAll('[data-customer-tier-rule]').forEach(row=>row.querySelectorAll('[data-tier-field]').forEach(input=>input.addEventListener('change',()=>{
    const data=customerTierCriteriaStore();
    const idx=data.findIndex(x=>x.id===row.dataset.customerTierRule); if(idx<0)return;
    const field=input.dataset.tierField;
    data[idx][field] = field==='note' ? input.value.trim() : Math.max(0,Number(input.value)||0);
    saveCustomerTierCriteriaStore(data); renderManagerCustomerPanel();
  })));
}
function customerCrmFilteredRecords() {
  let rows = customerCrmRecords();
  const q=String(crmCustomerSearch?.value||'').trim().toLowerCase();
  const behavior=crmBehaviorFilter?.value||'all', tier=crmTierFilter?.value||'all', care=crmCareFilter?.value||'all', sort=crmSortFilter?.value||'recent';
  if(q) rows=rows.filter(r=>String(r.name||'').toLowerCase().includes(q)||r.phone.includes(normalizePhone(q)));
  if(behavior!=='all') rows=rows.filter(r=>r.behaviorCode===behavior || (behavior==='returning' && ['returning','frequent'].includes(r.behaviorCode)));
  if(tier!=='all') rows=rows.filter(r=>r.tier===tier);
  if(care==='care') rows=rows.filter(r=>r.needsCare); else if(care==='normal') rows=rows.filter(r=>!r.needsCare);
  if(sort==='spend') rows.sort((a,b)=>b.totalSpend-a.totalSpend);
  else if(sort==='visits') rows.sort((a,b)=>b.totalVisits-a.totalVisits);
  else if(sort==='name') rows.sort((a,b)=>String(a.name).localeCompare(String(b.name),'vi'));
  else rows.sort((a,b)=>(b.lastDate?.getTime()||0)-(a.lastDate?.getTime()||0));
  return rows;
}
function renderManagerCustomerPanel() {
  const all=customerCrmRecords();
  const rows=customerCrmFilteredRecords();
  const now=new Date();
  const newMonth=all.filter(r=>r.firstDate&&r.firstDate.getFullYear()===now.getFullYear()&&r.firstDate.getMonth()===now.getMonth()).length;
  if ($('crmTotalCustomers')) $('crmTotalCustomers').textContent=all.length;
  if ($('crmNewCustomers')) $('crmNewCustomers').textContent=newMonth;
  if ($('crmReturningCustomers')) $('crmReturningCustomers').textContent=all.filter(r=>r.totalVisits>=2).length;
  if ($('crmDiamondCustomers')) $('crmDiamondCustomers').textContent=all.filter(r=>r.tier==='Kim cương').length;
  if ($('crmGoldCustomers')) $('crmGoldCustomers').textContent=all.filter(r=>r.tier==='Vàng').length;
  if ($('crmSilverCustomers')) $('crmSilverCustomers').textContent=all.filter(r=>r.tier==='Bạc').length;
  if ($('crmNeedsCareCustomers')) $('crmNeedsCareCustomers').textContent=all.filter(r=>r.needsCare).length;
  if(crmTableStatus) crmTableStatus.innerHTML=`<span>Đang hiển thị <b>${rows.length}</b> / ${all.length} khách hàng</span><span>Phân hạng theo <b>12 tháng gần nhất</b> • Chi tiêu/lượt PV chỉ tính lịch <b>Hoàn thành</b></span>`;
  if(managerCustomerTableBody) managerCustomerTableBody.innerHTML = rows.length ? rows.map((r,index)=>`<tr>
    <td>${index+1}</td>
    <td class="crm-name-cell"><button type="button" data-open-customer-profile="${escapeUiText(r.phone)}">${escapeUiText(r.name)}</button><small>${r.hasAccount?'Có tài khoản':'Khách vãng lai'}${r.gender?` • ${escapeUiText(r.gender)}`:''}</small></td>
    <td>${escapeUiText(r.phone)}</td><td>${customerDateLabel(r.firstDate)}</td><td>${customerDateLabel(r.lastDate)}</td>
    <td><strong>${r.totalVisits}</strong></td><td><strong>${revenueFormatMoney(r.totalSpend)}</strong></td><td>${escapeUiText(r.favoriteService)}</td>
    <td>${r.ratingCount?r.averageRating.toFixed(2)+' ★':'—'}</td>
    <td><span class="crm-behavior-badge">${escapeUiText(r.behaviorLabel)}</span></td>
    <td><span class="crm-tier-badge ${customerTierClass(r.tier)}">${escapeUiText(r.tier)}</span></td>
    <td><span class="crm-care-badge ${r.needsCare?'care':'normal'}">${r.needsCare?'⚠ Cần chăm sóc':'Bình thường'}</span></td>
  </tr>`).join('') : '<tr><td colspan="12" style="padding:30px;text-align:center">Không có khách phù hợp bộ lọc hiện tại.</td></tr>';
  managerCustomerTableBody?.querySelectorAll('[data-open-customer-profile]').forEach(btn=>btn.addEventListener('click',()=>openCustomerProfile(btn.dataset.openCustomerProfile)));
  renderCustomerTierCriteria();
}
function openCustomerProfile(phone='') {
  const record=customerCrmRecords().find(r=>r.phone===normalizePhone(phone)); if(!record)return;
  customerProfilePhone=record.phone;
  if(customerProfileTitle) customerProfileTitle.textContent=record.name;
  if(customerProfileIdentity) customerProfileIdentity.textContent=`${record.phone} • ${record.hasAccount?'Có tài khoản':'Khách vãng lai'}${record.gender?` • ${record.gender}`:''}${record.address?` • ${record.address}`:''}`;
  if(customerProfileTierLabel) customerProfileTierLabel.textContent=`${record.tier} • ${record.behaviorLabel}`;
  if(customerProfileStats) customerProfileStats.innerHTML=`
    <article><small>LẦN ĐẦU</small><strong>${customerDateLabel(record.firstDate)}</strong></article>
    <article><small>LẦN GẦN NHẤT</small><strong>${customerDateLabel(record.lastDate)}</strong></article>
    <article><small>TỔNG LƯỢT PV</small><strong>${record.totalVisits}</strong></article>
    <article><small>TỔNG CHI TIÊU</small><strong>${revenueFormatMoney(record.totalSpend)}</strong></article>
    <article><small>DV YÊU THÍCH</small><strong>${escapeUiText(record.favoriteService)}</strong></article>`;
  if(customerProfileCare){customerProfileCare.hidden=!record.needsCare; customerProfileCare.innerHTML=record.needsCare?`⚠ <b>Khách cần chăm sóc:</b> có ${record.careItems.length} đánh giá thấp hoặc phản hồi tiêu cực trong 90 ngày gần đây. Nên chủ động xem lịch sử và liên hệ chăm sóc phù hợp.`:'';}
  if(customerProfileHistory) customerProfileHistory.innerHTML=record.completed.length?record.completed.slice().sort((a,b)=>new Date(b.startAt||0)-new Date(a.startAt||0)).map(item=>{
    const sentiment=feedbackSentimentMeta(item); const feedback=String(item.serviceFeedback||'').trim(); const d=new Date(item.startAt||0);
    return `<article class="customer-history-row"><span><strong>${customerDateLabel(d)}</strong><small>${Number.isNaN(d.getTime())?'—':d.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'})}</small></span><div><strong>${escapeUiText(item.serviceName||'Dịch vụ')}</strong><small>${escapeUiText(item.nailSample||'')}</small></div><span>${revenueFormatMoney(customerMoneyFromAppointment(item))}</span><span>${escapeUiText(item.serviceStaffName||'—')}</span><span>${item.ratingFinalized&&item.rating?`${item.rating} ★`:'—'}</span><span class="customer-history-feedback ${sentiment.label==='negative'?'is-negative':''}">${feedback?escapeUiText(feedback):'—'}</span></article>`;
  }).join(''):'<div class="schedule-empty"><strong>Chưa có lịch Hoàn thành</strong></div>';
  customerProfileBackdrop?.classList.add('open'); customerProfileBackdrop?.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeCustomerProfileModal(){customerProfileBackdrop?.classList.remove('open');customerProfileBackdrop?.setAttribute('aria-hidden','true');customerProfilePhone='';document.body.style.overflow='';}
function managerSegmentMatches(record,segment='all') {
  if(segment==='all') return true;
  if(segment==='care') return record.needsCare;
  if(segment.startsWith('tier:')) return record.tier===segment.slice(5);
  if(segment.startsWith('behavior:')) {
    const code=segment.slice(9); if(code==='returning') return ['returning','frequent'].includes(record.behaviorCode); return record.behaviorCode===code;
  }
  return true;
}
function openManagerCommsForCustomer(phone='') {
  const target=normalizePhone(phone);
  closeCustomerProfileModal();
  if(managerCommsSegmentFilter) managerCommsSegmentFilter.value='all';
  if(managerCommsSearch) managerCommsSearch.value='';
  openManagerCommsModal();
  setTimeout(()=>{
    renderManagerRecipientList('');
    const input=[...(managerCommsRecipientList?.querySelectorAll('[data-manager-recipient]')||[])].find(el=>normalizePhone(el.value||'')===target);
    if(input){input.checked=true;updateManagerRecipientSummary();input.scrollIntoView({block:'center'});}
  },20);
}

function selectedManagerRecipientPhones() {
  if (!managerCommsRecipientList) return [];
  return [...managerCommsRecipientList.querySelectorAll('[data-manager-recipient]:checked')].map(input => normalizePhone(input.value || '')).filter(Boolean);
}
function updateManagerRecipientSummary() {
  if (!managerCommsRecipientList) return;
  const all = [...managerCommsRecipientList.querySelectorAll('[data-manager-recipient]')];
  const checked = all.filter(input => input.checked);
  if (managerCommsSelectedCount) managerCommsSelectedCount.textContent = `${checked.length} khách`;
  if (managerCommsSelectAll) {
    managerCommsSelectAll.checked = all.length > 0 && checked.length === all.length;
    managerCommsSelectAll.indeterminate = checked.length > 0 && checked.length < all.length;
  }
}
function renderManagerRecipientList(query='') {
  if (!managerCommsRecipientList) return;
  const records = customerCrmRecords();
  const segment = managerCommsSegmentFilter?.value || 'all';
  const normalizedQuery = String(query || '').trim().toLowerCase();
  const filtered = records.filter(record => managerSegmentMatches(record,segment)).filter(record => {
    if (!normalizedQuery) return true;
    return String(record.name || '').toLowerCase().includes(normalizedQuery) || record.phone.includes(normalizePhone(normalizedQuery));
  });
  if (managerCommsCustomerTotal) managerCommsCustomerTotal.textContent = `${filtered.length}/${records.length} khách theo bộ lọc`;
  if (!filtered.length) {
    managerCommsRecipientList.innerHTML = '<div class="manager-recipient-empty"><span>♡</span><strong>Không tìm thấy khách hàng</strong><small>Hãy đổi nhóm khách hoặc từ khóa tìm kiếm.</small></div>';
    updateManagerRecipientSummary(); return;
  }
  managerCommsRecipientList.innerHTML = filtered.map(record => {
    const initials = initialsForName(record.name || 'KH');
    return `<label class="manager-recipient-item"><input type="checkbox" data-manager-recipient value="${record.phone}"><span class="manager-recipient-check">✓</span><span class="manager-recipient-avatar">${initials}</span><span class="manager-recipient-copy"><strong>${escapeUiText(record.name || 'Khách hàng')}</strong><small>${record.phone}${record.gender ? ` • ${escapeUiText(record.gender)}` : ''} • ${escapeUiText(record.tier)} • ${escapeUiText(record.behaviorLabel)}${record.needsCare?' • ⚠ cần chăm sóc':''}</small></span></label>`;
  }).join('');
  managerCommsRecipientList.querySelectorAll('[data-manager-recipient]').forEach(input => input.addEventListener('change', updateManagerRecipientSummary));
  updateManagerRecipientSummary();
}
function currentManagerCommsType() {
  return document.querySelector('input[name="managerCommsType"]:checked')?.value || 'promotion';
}
function renderManagerCommsTypeState() {
  document.querySelectorAll('.manager-comms-type').forEach(label => {
    const input = label.querySelector('input[name="managerCommsType"]');
    label.classList.toggle('active', !!input?.checked);
  });
}
function normalizeManagerSummary(text='') {
  return String(text || '').replace(/\s+/g,' ').trim();
}
function ensureSentenceEnd(text='') {
  const value = normalizeManagerSummary(text);
  if (!value) return '';
  return /[.!?…]$/.test(value) ? value : `${value}.`;
}
function smartManagerDraft(summary, type='promotion', revision=0) {
  const salon = salonProfile()?.name || 'Beauty Moment';
  const core = ensureSentenceEnd(summary);
  const variant = Math.abs(Number(revision) || 0) % 4;
  if (type === 'promotion') {
    const drafts = [
      `Thân gửi Quý khách hàng thân yêu của ${salon} 💗\n\n${core}\n\nĐây là một món quà nhỏ mà ${salon} muốn gửi tới Quý khách như lời cảm ơn vì đã luôn tin tưởng và đồng hành cùng tiệm. Hy vọng chương trình sẽ mang đến cho mình thêm một lý do thật vui để dành thời gian chăm sóc bản thân và tận hưởng những phút giây thư giãn.\n\nQuý khách có thể chủ động xem lịch trống và đặt lịch ngay trên ứng dụng để tiệm chuẩn bị phục vụ chu đáo nhất. ${salon} rất mong sớm được đón và chăm sóc Quý khách ạ. ✨`,
      `Xin chào Quý khách của ${salon} 🌷\n\n${core}\n\n${salon} xin dành chương trình này như một lời tri ân chân thành tới những khách hàng đã yêu thương và ủng hộ tiệm. Mỗi cuộc hẹn không chỉ là một buổi làm đẹp mà còn là khoảng thời gian riêng để mình thư giãn, làm mới bản thân và tự tin hơn.\n\nNếu chương trình phù hợp, Quý khách hãy chọn khung giờ thuận tiện trên ứng dụng. Tiệm sẽ cố gắng chuẩn bị thật chỉn chu để mang đến trải nghiệm dễ chịu nhất cho mình. Hẹn gặp Quý khách thật gần nhé! 💕`,
      `${salon} trân trọng gửi tới Quý khách một ưu đãi đặc biệt ✨\n\n${core}\n\nCảm ơn Quý khách đã luôn dành sự tin tưởng cho ${salon}. Tiệm mong rằng ưu đãi lần này sẽ giúp mình có thêm một khoảng thời gian thật nhẹ nhàng để chăm sóc vẻ đẹp và tận hưởng cảm giác được nâng niu.\n\nSố lượng khung giờ đẹp có thể giới hạn, vì vậy Quý khách có thể xem lịch và đặt trước ngay trên ứng dụng. ${salon} rất hân hạnh được phục vụ Quý khách.`,
      `Một chút yêu thương từ ${salon} gửi đến Quý khách 💐\n\n${core}\n\nVẻ đẹp xứng đáng được chăm sóc bằng những khoảnh khắc thật thư thái. Vì vậy, ${salon} gửi chương trình này tới Quý khách với mong muốn mỗi lần ghé tiệm đều là một trải nghiệm vui vẻ, nhẹ nhàng và đáng nhớ.\n\nQuý khách hãy chọn lịch phù hợp trên ứng dụng, phần còn lại để ${salon} chuẩn bị thật chu đáo cho mình nhé. Cảm ơn Quý khách rất nhiều vì đã luôn đồng hành cùng tiệm.`
    ];
    return drafts[variant];
  }
  const drafts = [
    `Thân gửi Quý khách hàng của ${salon},\n\n${core}\n\n${salon} xin gửi thông tin này để Quý khách chủ động sắp xếp thời gian và kế hoạch của mình thuận tiện hơn. Tiệm rất trân trọng sự tin tưởng và đồng hành của Quý khách trong suốt thời gian qua.\n\nNếu cần hỗ trợ thêm, Quý khách có thể theo dõi thông báo hoặc liên hệ với tiệm qua thông tin trên ứng dụng. ${salon} xin cảm ơn và rất mong tiếp tục được phục vụ Quý khách ạ. ❤️`,
    `Xin chào Quý khách của ${salon} 🌷\n\n${core}\n\nTiệm xin phép thông tin sớm để Quý khách dễ dàng chủ động lịch cá nhân. ${salon} luôn mong mỗi trải nghiệm của Quý khách được thuận tiện, rõ ràng và thoải mái nhất.\n\nCảm ơn Quý khách đã dành thời gian theo dõi thông báo. Nếu có điều gì cần hỗ trợ, tiệm luôn sẵn sàng đồng hành cùng mình ạ.`,
    `${salon} trân trọng thông báo tới Quý khách:\n\n${core}\n\nThông tin được gửi tới Quý khách để mình có thể chủ động sắp xếp lịch và tránh những bất tiện không cần thiết. ${salon} chân thành cảm ơn sự thông cảm, tin tưởng và ủng hộ của Quý khách.\n\nKính chúc Quý khách thật nhiều niềm vui và hẹn gặp mình trong lần gần nhất ạ.`,
    `Gửi Quý khách thân mến của ${salon} 💗\n\n${core}\n\n${salon} xin gửi lời cảm ơn vì Quý khách luôn tin tưởng và đồng hành cùng tiệm. Tiệm chủ động gửi thông báo này để mình dễ dàng nắm thông tin và sắp xếp thời gian phù hợp.\n\nMọi cập nhật tiếp theo sẽ được gửi ngay trên ứng dụng. ${salon} rất mong tiếp tục được chăm sóc và phục vụ Quý khách trong thời gian tới.`
  ];
  return drafts[variant];
}
function setManagerAiState({approved=false, generated=false, message=''}={}) {
  managerAiDraftApproved = !!approved;
  if (managerCommsAiApprove) {
    managerCommsAiApprove.disabled = !generated;
    managerCommsAiApprove.classList.toggle('is-approved', managerAiDraftApproved);
    managerCommsAiApprove.textContent = managerAiDraftApproved ? '✓ Đã đồng ý' : '✓ Đồng ý';
  }
  if (managerCommsAiRevise) managerCommsAiRevise.disabled = !generated;
  if (managerCommsAiStatus) {
    managerCommsAiStatus.textContent = message || (managerAiDraftApproved ? 'Nội dung đã được duyệt' : generated ? 'AI đã soạn xong — vui lòng duyệt' : 'Chưa tạo nội dung');
    managerCommsAiStatus.classList.toggle('approved', managerAiDraftApproved);
  }
}
function generateManagerAiDraft({revise=false}={}) {
  const summary = normalizeManagerSummary(managerCommsSubject?.value || '');
  if (!summary) {
    if (managerCommsAiReady) managerCommsAiReady.checked = false;
    if (managerCommsMessage) { managerCommsMessage.className='form-message error'; managerCommsMessage.textContent='Bạn hãy nhập nội dung Tóm tắt trước, sau đó tích ô để AI bắt đầu soạn.'; }
    setManagerAiState({generated:false, message:'Chưa có nội dung tóm tắt'});
    return false;
  }
  if (revise) managerAiRevision += 1;
  else managerAiRevision = 0;
  const draft = smartManagerDraft(summary, currentManagerCommsType(), managerAiRevision);
  managerAiLastGenerated = draft;
  if (managerCommsBody) managerCommsBody.value = draft;
  setManagerAiState({approved:false, generated:true, message: revise ? `AI đã viết lại phương án ${managerAiRevision + 1} — vui lòng đọc và duyệt` : 'AI đã soạn xong — vui lòng đọc và duyệt'});
  if (managerCommsMessage) { managerCommsMessage.textContent=''; managerCommsMessage.className='form-message'; }
  updateManagerCommsPreview();
  return true;
}
function invalidateManagerAiDraft({clearBody=false}={}) {
  managerAiDraftApproved = false;
  managerAiRevision = 0;
  managerAiLastGenerated = '';
  if (managerCommsAiReady) managerCommsAiReady.checked = false;
  if (clearBody && managerCommsBody) managerCommsBody.value = '';
  setManagerAiState({generated:false});
  updateManagerCommsPreview();
}

function updateManagerCommsPreview() {
  if (managerCommsPreviewTitle) managerCommsPreviewTitle.textContent = managerCommsSubject?.value.trim() || 'Tóm tắt thông báo sẽ hiển thị tại đây';
  if (managerCommsPreviewBody) managerCommsPreviewBody.textContent = managerCommsBody?.value.trim() || 'Nội dung khách nhận được sẽ hiển thị ở khu vực này.';
  renderManagerCommsTypeState();
}
function resetManagerCommsComposer() {
  if (managerCommsForm) managerCommsForm.reset();
  managerAiDraftApproved = false;
  managerAiRevision = 0;
  managerAiLastGenerated = '';
  const promoRadio = document.querySelector('input[name="managerCommsType"][value="promotion"]');
  if (promoRadio) promoRadio.checked = true;
  if (managerCommsSearch) managerCommsSearch.value = '';
  if (managerCommsSegmentFilter) managerCommsSegmentFilter.value = 'all';
  renderManagerRecipientList('');
  if (managerCommsMessage) { managerCommsMessage.textContent=''; managerCommsMessage.className='form-message'; }
  setManagerAiState({generated:false});
  updateManagerCommsPreview();
}
function openManagerCommsModal() {
  const session = getSession();
  if (!session || session.role !== 'Quản lý') return;
  toggleMenu(false);
  toggleNotificationPanel(false);
  renderManagerRecipientList(managerCommsSearch?.value || '');
  updateManagerCommsPreview();
  managerCommsBackdrop?.classList.add('open');
  managerCommsBackdrop?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeManagerCommsModal() {
  managerCommsBackdrop?.classList.remove('open');
  managerCommsBackdrop?.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function managerSendCustomerMessage(event) {
  event.preventDefault();
  const session = getSession();
  if (!session || session.role !== 'Quản lý') return;
  const recipients = selectedManagerRecipientPhones();
  const subject = managerCommsSubject?.value.trim() || '';
  const body = managerCommsBody?.value.trim() || '';
  const type = currentManagerCommsType();
  if (!subject || !body) {
    if (managerCommsMessage) { managerCommsMessage.className='form-message error'; managerCommsMessage.textContent='Vui lòng nhập Tóm tắt và tạo Nội dung chi tiết trước khi gửi.'; }
    return;
  }
  if (!managerAiDraftApproved) {
    if (managerCommsMessage) { managerCommsMessage.className='form-message error'; managerCommsMessage.textContent='Vui lòng đọc nội dung AI đã soạn và bấm “Đồng ý” trước khi gửi.'; }
    return;
  }
  if (!recipients.length) {
    if (managerCommsMessage) { managerCommsMessage.className='form-message error'; managerCommsMessage.textContent='Vui lòng chọn ít nhất một khách hàng nhận thông báo.'; }
    return;
  }
  const now = new Date().toISOString();
  const campaignId = `manager-campaign-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
  const data = notificationStore();
  recipients.forEach((phone,index) => {
    data.unshift({
      id:`${campaignId}-${index}`,
      campaignId,
      recipientPhone:phone,
      recipientRole:'Khách hàng',
      type,
      title:subject,
      message:body.length > 150 ? `${body.slice(0,147)}...` : body,
      content:body,
      sender:salonProfile().name,
      createdAt:now,
      read:false,
      source:'manager-composer'
    });
  });
  saveNotificationStore(data);
  if (type === 'promotion') {
    const sentAt = now;
    const expiresAt = new Date(new Date(sentAt).getTime() + PROMOTION_LIFETIME_MS).toISOString();
    const campaigns = promotionCampaignStoreRaw().filter(item => item.id !== campaignId && !isPromotionExpired(item));
    campaigns.unshift({
      id:campaignId,
      type:'promotion',
      summary:subject,
      content:body,
      sender:salonProfile().name,
      sentAt,
      expiresAt,
      recipientPhones:[...new Set(recipients.map(phone => normalizePhone(phone)).filter(Boolean))]
    });
    savePromotionCampaignStore(campaigns);
  }
  if (managerCommsMessage) { managerCommsMessage.className='form-message success'; managerCommsMessage.textContent=`Đã gửi ${type === 'promotion' ? 'khuyến mại' : 'thông báo'} tới ${recipients.length} khách hàng.`; }
  showToast(`Đã gửi tới ${recipients.length} khách hàng.`);
  managerCommsRecipientList?.querySelectorAll('[data-manager-recipient]').forEach(input => { input.checked=false; });
  updateManagerRecipientSummary();
  if (managerCommsSubject) managerCommsSubject.value='';
  if (managerCommsBody) managerCommsBody.value='';
  if (managerCommsAiReady) managerCommsAiReady.checked=false;
  managerAiDraftApproved=false;
  managerAiRevision=0;
  managerAiLastGenerated='';
  setManagerAiState({generated:false});
  updateManagerCommsPreview();
}
function promotionCampaignRecipientsLabel(campaign) {
  const phones = Array.isArray(campaign?.recipientPhones) ? campaign.recipientPhones : [];
  if (!phones.length) return 'Chưa có người nhận';
  const accountsByPhone = new Map(customerAccountsList().map(acc => [normalizePhone(acc.phone || ''), acc]));
  const names = phones.map(phone => accountsByPhone.get(normalizePhone(phone))?.name || phone).filter(Boolean);
  if (names.length <= 3) return names.join(', ');
  return `${names.slice(0,3).join(', ')} và ${names.length - 3} khách khác`;
}
function promotionNotificationForCampaign(campaignId, session=getSession()) {
  if (!campaignId || !session) return null;
  return notificationsForSession(session).find(item => item.type === 'promotion' && item.campaignId === campaignId) || null;
}
function renderPromotionHistory() {
  if (!promotionHistoryList) return;
  const session = getSession();
  const isManager = session?.role === 'Quản lý';
  const isCustomer = session?.role === 'Khách hàng';
  let campaigns = promotionCampaignStore();
  if (isCustomer) {
    const phone = normalizePhone(session.phone || '');
    campaigns = campaigns.filter(item => (item.recipientPhones || []).map(normalizePhone).includes(phone));
  } else if (!isManager) {
    campaigns = [];
  }
  if (promotionHistoryEyebrow) promotionHistoryEyebrow.textContent = isManager ? 'TÀI KHOẢN QUẢN LÝ' : 'ƯU ĐÃI DÀNH CHO BẠN';
  if (promotionHistoryRoleLabel) promotionHistoryRoleLabel.textContent = isManager ? 'Danh sách chương trình đã gửi' : 'Chương trình còn hiệu lực';
  if (promotionHistoryTitle) promotionHistoryTitle.textContent = isManager ? 'Chương trình khuyến mại đã gửi' : 'Ưu đãi dành cho bạn';
  if (promotionHistorySubtitle) promotionHistorySubtitle.textContent = isManager
    ? 'Các chương trình đã gửi tới khách và còn trong thời hạn hiển thị 48 giờ.'
    : 'Những chương trình khuyến mại tiệm đã gửi tới tài khoản của bạn trong 48 giờ gần nhất.';
  if (promotionHistoryCount) promotionHistoryCount.textContent = `${campaigns.length} chương trình`;
  if (!campaigns.length) {
    promotionHistoryList.innerHTML = `<div class="promotion-history-empty"><span>🎁</span><strong>${isManager ? 'Chưa có chương trình khuyến mại đang hiển thị' : 'Hiện chưa có ưu đãi mới'}</strong><small>${isManager ? 'Khi bạn gửi một chương trình Khuyến mại, chương trình sẽ xuất hiện tại đây trong 48 giờ.' : 'Khi tiệm gửi chương trình mới tới bạn, nội dung sẽ xuất hiện ở đây.'}</small></div>`;
    return;
  }
  promotionHistoryList.innerHTML = campaigns.map((campaign,index) => {
    const expiresAt = new Date(promotionExpiresAtValue(campaign)).toISOString();
    const status = isCustomer ? promotionNotificationForCampaign(campaign.id, session) : null;
    const badge = isCustomer ? `<span class="promotion-read-state ${status?.read ? 'read' : 'unread'}">${status?.read ? 'Đã xem' : 'Chưa xem'}</span>` : `<span class="promotion-recipient-count">${(campaign.recipientPhones || []).length} khách nhận</span>`;
    const meta = isManager
      ? `<div class="promotion-history-recipients"><b>Người nhận:</b> ${escapeUiText(promotionCampaignRecipientsLabel(campaign))}</div>`
      : '';
    return `<article class="promotion-history-card">
      <div class="promotion-history-card-top"><div class="promotion-history-index">${String(index+1).padStart(2,'0')}</div><div class="promotion-history-card-title"><small>GỬI ${escapeUiText(formatPromotionMoment(campaign.sentAt))}</small><strong>${escapeUiText(campaign.summary || 'Chương trình khuyến mại')}</strong></div>${badge}</div>
      <div class="promotion-history-content">${escapeUiText(campaign.content || '').replace(/\n/g,'<br>')}</div>
      ${meta}
      <div class="promotion-history-expiry"><span>⏱</span><span>Tự ẩn lúc <b>${escapeUiText(formatPromotionMoment(expiresAt))}</b></span></div>
    </article>`;
  }).join('');
}
function openPromotionHistory() {
  const session = getSession();
  if (!session || (session.role !== 'Quản lý' && session.role !== 'Khách hàng')) return;
  toggleMenu(false);
  toggleNotificationPanel(false);
  renderPromotionHistory();
  promotionHistoryBackdrop?.classList.add('open');
  promotionHistoryBackdrop?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closePromotionHistoryModal() {
  promotionHistoryBackdrop?.classList.remove('open');
  promotionHistoryBackdrop?.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

function customerUnreadMenuCounts(session=getSession()) {
  if (!session || session.role !== 'Khách hàng') return { promotions:0, schedule:0 };
  const unread = notificationsForSession(session).filter(item => !item.read);
  return {
    promotions: unread.filter(item => item.type === 'promotion').length,
    schedule: unread.filter(item => item.type === 'booking' || item.actionType === 'reoffer-confirm').length
  };
}
function renderCustomerNavCounters(session=getSession()) {
  const promoBadge = $('navPromoUnreadBadge');
  const scheduleBadge = $('navScheduleUnreadBadge');
  const isCustomer = session?.role === 'Khách hàng';
  const counts = customerUnreadMenuCounts(session);
  if (promoBadge) {
    promoBadge.textContent = String(counts.promotions);
    promoBadge.hidden = !isCustomer;
  }
  if (scheduleBadge) {
    scheduleBadge.textContent = String(counts.schedule);
    scheduleBadge.hidden = !isCustomer;
  }
}


// ===== VISION 58 — GIỚI THIỆU TIỆM ĐỘNG + GIỌNG ĐỌC =====
function customerIntroActiveServices() {
  const ids=[...DEFAULT_SERVICE_IDS,...customServiceItems().map(item=>item?.id).filter(Boolean)];
  const seen=new Set();
  return ids.filter(id=>{
    if(!id || seen.has(id)) return false;
    seen.add(id);
    return Boolean(SERVICE_DATA[id]) && !isServiceDeleted(id) && isServiceActive(id);
  }).map(id=>({id,...SERVICE_DATA[id]}));
}
function customerIntroSafeProfileValue(value='', fallback='Đang cập nhật') {
  const text=String(value||'').trim();
  if(!text || /chủ tiệm chưa cập nhật/i.test(text)) return fallback;
  return text;
}
function customerIntroDynamicValueText(services=[]) {
  if(!services.length) return 'Tiệm đang cập nhật danh sách dịch vụ để mang đến trải nghiệm phù hợp hơn cho khách.';
  const top=services.slice(0,3).map(item=>item.title).filter(Boolean);
  if(top.length===1) return `Dịch vụ ${top[0]} được trình bày rõ về giá, thời lượng và trải nghiệm để bạn dễ lựa chọn.`;
  if(top.length===2) return `Từ ${top[0]} đến ${top[1]}, tiệm hướng tới trải nghiệm chỉn chu, nhẹ nhàng và phù hợp nhu cầu.`;
  return `Từ ${top[0]}, ${top[1]} đến ${top[2]}, mỗi dịch vụ đều hướng tới trải nghiệm chỉn chu và dễ lựa chọn.`;
}
function renderCustomerIntroduction() {
  if(!customerIntroBackdrop) return;
  const salon=salonProfile();
  const services=customerIntroActiveServices();
  const hours=shopHoursForDate(localDateISO());
  const name=customerIntroSafeProfileValue(salon.name,'BEAUTY MOMENT');
  const address=customerIntroSafeProfileValue(salon.address,'Địa chỉ đang được cập nhật');
  const phone=customerIntroSafeProfileValue(salon.phone,'Số điện thoại đang được cập nhật');
  const logo=$('customerIntroLogo');
  if(logo){ logo.src=salon.logo||'assets/salon-owner-logo.svg'; logo.alt=`Logo ${name}`; }
  if($('customerIntroTitle')) $('customerIntroTitle').textContent=`Chào mừng bạn đến ${name}`;
  if($('customerIntroLead')) $('customerIntroLead').textContent=`Một nơi để bạn chủ động lịch hẹn, hiểu rõ dịch vụ và tận hưởng thời gian chăm sóc bản thân nhẹ nhàng hơn.`;
  if($('customerIntroSalonName')) $('customerIntroSalonName').textContent=name;
  if($('customerIntroAddress')) $('customerIntroAddress').textContent=address;
  if($('customerIntroPhone')) $('customerIntroPhone').textContent=phone;
  if($('customerIntroHours')) $('customerIntroHours').textContent=`${hours.open} – ${hours.close}`;
  if($('customerIntroServiceCount')) $('customerIntroServiceCount').textContent=`${services.length} dịch vụ`;
  if($('customerIntroValueDynamic')) $('customerIntroValueDynamic').textContent=customerIntroDynamicValueText(services);
  const list=$('customerIntroServices');
  if(list){
    list.innerHTML=services.length ? services.map(service=>`
      <article class="customer-intro-service" data-intro-service="${escapeUiText(service.id)}">
        <img src="${escapeUiText(service.image||'assets/service-beauty-relax.png')}" alt="${escapeUiText(service.title||'Dịch vụ')}">
        <div><h4>${escapeUiText(service.title||'Dịch vụ')}</h4><p>${escapeUiText(service.summary||service.description||'Thông tin dịch vụ đang được cập nhật.')}</p>
        <div class="customer-intro-service-meta"><span>${escapeUiText(service.price||'Đang cập nhật giá')}</span><span>${escapeUiText(service.duration||'Đang cập nhật thời gian')}</span></div></div>
      </article>`).join('') : '<div class="customer-intro-service"><div><h4>Dịch vụ đang được cập nhật</h4><p>Chủ tiệm sẽ bổ sung thông tin dịch vụ sớm nhất.</p></div></div>';
  }
}
function customerIntroSpeechText() {
  const salon=salonProfile();
  const services=customerIntroActiveServices();
  const hours=shopHoursForDate(localDateISO());
  const name=customerIntroSafeProfileValue(salon.name,'Beauty Moment');
  const address=customerIntroSafeProfileValue(salon.address,'địa chỉ đang được cập nhật');
  const phone=customerIntroSafeProfileValue(salon.phone,'số điện thoại đang được cập nhật');
  const serviceNames=services.map(item=>item.title).filter(Boolean);
  const serviceText=serviceNames.length ? serviceNames.join(', ') : 'các dịch vụ chăm sóc sắc đẹp đang được cập nhật';
  return `Xin chào. Chào mừng bạn đến với ${name}. Tiệm hiện ở ${address}. Số điện thoại liên hệ là ${phone}. Các dịch vụ đang phục vụ gồm ${serviceText}. Giá và thời lượng từng dịch vụ được hiển thị rõ trên ứng dụng để bạn chủ động lựa chọn. Hôm nay tiệm mở cửa từ ${hours.open} đến ${hours.close}. ${customerIntroDynamicValueText(services)} Rất mong được đón tiếp và chăm sóc bạn.`;
}
function setCustomerIntroSpeaking(active=false){
  navIntroVoiceBtn?.classList.toggle('is-speaking',active);
  customerIntroListenBtn?.classList.toggle('is-speaking',active);
  const span=customerIntroListenBtn?.querySelector('span');
  if(span) span.textContent=active?'Đang đọc giới thiệu…':'Nghe giới thiệu';
}
function speakCustomerIntroduction() {
  if(!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance==='undefined') {
    showToast('Trình duyệt này chưa hỗ trợ đọc nội dung bằng giọng nói.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(customerIntroSpeechText());
  utterance.lang='vi-VN'; utterance.rate=.92; utterance.pitch=.95; utterance.volume=1;
  const voices=window.speechSynthesis.getVoices?.()||[];
  const viVoice=voices.find(v=>String(v.lang||'').toLowerCase()==='vi-vn') || voices.find(v=>String(v.lang||'').toLowerCase().startsWith('vi'));
  if(viVoice) utterance.voice=viVoice;
  utterance.onstart=()=>setCustomerIntroSpeaking(true);
  utterance.onend=()=>setCustomerIntroSpeaking(false);
  utterance.onerror=()=>setCustomerIntroSpeaking(false);
  window.speechSynthesis.speak(utterance);
}
function openCustomerIntroduction(){
  closeManagerConfigWorkspace();
  renderCustomerIntroduction();
  customerIntroBackdrop?.classList.add('open');
  customerIntroBackdrop?.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}
function closeCustomerIntroductionModal(){
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
  setCustomerIntroSpeaking(false);
  customerIntroBackdrop?.classList.remove('open');
  customerIntroBackdrop?.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}


const ROLE_NAVIGATION = {
  customer: {
    intro: { label:'Giới thiệu', key:'customer-intro' },
    service: { label:'Dịch vụ', key:'customer-services' },
    promo: { label:'Ưu đãi', key:'customer-promotions' },
    schedule: { label:'Lịch của tôi', key:'customer-my-schedule' },
    contact: { label:'Liên hệ', key:'customer-contact' }
  },
  manager: {
    intro: { label:'Tổng quan', key:'manager-overview' },
    service: { label:'Quản lý & cấu hình', key:'manager-config' },
    promo: { label:'Khuyến mại & thông báo', key:'manager-promotions-notifications' },
    schedule: { label:'Lịch khách hàng', key:'manager-appointments' },
    contact: { label:'Thông tin tiệm', key:'manager-salon-info' }
  },
  staff: {
    intro: { label:'Tổng quan', key:'staff-overview' },
    service: { label:'Lịch của tôi', key:'staff-my-schedule' },
    promo: { label:'Dịch vụ & quy trình', key:'staff-services-process' },
    schedule: { label:'Ca làm việc', key:'staff-shifts' },
    contact: { label:'Đánh giá của tôi', key:'staff-ratings' },
    extra: { label:'Thông báo', key:'staff-notifications' }
  }
};
function renderRoleNavigation(session) {
  const isManager = session?.role === 'Quản lý';
  const isStaff = session?.role === 'Nhân viên';
  const config = isManager ? ROLE_NAVIGATION.manager : (isStaff ? ROLE_NAVIGATION.staff : ROLE_NAVIGATION.customer);
  const map = [
    [navIntroBtn, config.intro, 'intro'],
    [navServiceBtn, config.service, 'service'],
    [navPromoBtn, config.promo, 'promo'],
    [myScheduleNavBtn, config.schedule, 'schedule'],
    [contactNavBtn, config.contact, 'contact']
  ];
  map.forEach(([el, item, slot]) => {
    if (!el || !item) return;
    if (!isManager && !isStaff && slot === 'promo') {
      el.innerHTML = `<span class="nav-role-label">${item.label}</span><span id="navPromoUnreadBadge" class="nav-role-counter" aria-label="Số ưu đãi chưa xem">0</span>`;
    } else if (!isManager && !isStaff && slot === 'schedule') {
      el.innerHTML = `<span class="nav-role-label">${item.label}</span><span id="navScheduleUnreadBadge" class="nav-role-counter" aria-label="Số thông báo lịch chưa xem">0</span>`;
    } else {
      el.innerHTML = `<span class="nav-role-label">${item.label}</span>`;
    }
    el.dataset.navKey = item.key;
  });
  if (staffExtraNavBtn) {
    staffExtraNavBtn.hidden = !isStaff;
    staffExtraNavBtn.style.display = isStaff ? 'inline-flex' : 'none';
    if (isStaff && config.extra) {
      staffExtraNavBtn.innerHTML = `<span class="nav-role-label">${config.extra.label}</span>`;
      staffExtraNavBtn.dataset.navKey = config.extra.key;
    }
  }
  document.body.dataset.activeRoleUi = isManager ? 'manager' : (isStaff ? 'staff' : 'customer');
  if (navIntroVoiceBtn) navIntroVoiceBtn.hidden = isManager || isStaff;
  renderCustomerNavCounters(session);
}


function staffNameForDisplay(staff) {
  return String(staff?.fullName || staff?.name || 'Nhân viên').trim();
}
function normalizePersonText(value='') {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/đ/g,'d').replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ').trim();
}
function appointmentBelongsToStaff(item, staff) {
  if (item?.serviceStaffId && staff?.id && item.serviceStaffId === staff.id) return true;
  const target = normalizePersonText(item?.serviceStaffName || item?.ratingStaffName || '');
  if (!target) return false;
  const variants = [staff?.name, staff?.fullName, staffShortNameFromRecord(staff)].map(normalizePersonText).filter(Boolean);
  if (variants.includes(target)) return true;
  const targetLast = target.split(' ').pop();
  return variants.some(value => value.split(' ').pop() === targetLast);
}
function localDateFromAppointment(item) {
  const raw = item?.startAt || item?.createdAt || '';
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? null : date;
}
function quarterNumberFromDate(date) {
  return Math.floor(date.getMonth() / 3) + 1;
}
function quarterRoman(quarter) {
  return ['','I','II','III','IV'][Number(quarter)] || String(quarter || '');
}
function quarterBounds(year, quarter) {
  const y = Number(year);
  const q = Math.max(1, Math.min(4, Number(quarter) || 1));
  const startMonth = (q - 1) * 3;
  const start = new Date(y, startMonth, 1, 0, 0, 0, 0);
  const nextYear = q === 4 ? y + 1 : y;
  const nextMonth = q === 4 ? 0 : startMonth + 3;
  const nextStart = new Date(nextYear, nextMonth, 1, 0, 0, 0, 0);
  const end = new Date(nextStart.getTime() - 1);
  const closeAt = new Date(nextYear, nextMonth, 5, 0, 0, 0, 0);
  return { year:y, quarter:q, start, end, closeAt, key:`${y}-Q${q}` };
}
function previousQuarter(year, quarter) {
  return quarter <= 1 ? { year:Number(year)-1, quarter:4 } : { year:Number(year), quarter:Number(quarter)-1 };
}
function activeEvaluationQuarter(now = new Date()) {
  const currentQuarter = quarterNumberFromDate(now);
  const currentYear = now.getFullYear();
  const currentBounds = quarterBounds(currentYear, currentQuarter);
  // Từ ngày 01 đến hết ngày 04 của quý mới, bảng vẫn giữ quý vừa kết thúc.
  // Bắt đầu 00:00 ngày 05 mới chuyển sang quý mới và backfill dữ liệu từ ngày 01.
  const switchAt = new Date(currentBounds.start.getFullYear(), currentBounds.start.getMonth(), 5, 0, 0, 0, 0);
  if (now >= switchAt) return currentBounds;
  const previous = previousQuarter(currentYear, currentQuarter);
  return quarterBounds(previous.year, previous.quarter);
}
function appointmentInQuarter(item, year, quarter) {
  const date = localDateFromAppointment(item);
  if (!date) return false;
  const bounds = quarterBounds(year, quarter);
  return date >= bounds.start && date <= bounds.end;
}
function staffRatingStatsForQuarter(staff, year, quarter) {
  const counts = {1:0,2:0,3:0,4:0,5:0};
  appointmentStore().forEach(item => {
    const rating = Math.max(0, Math.min(5, Number(item?.rating) || 0));
    if (!item?.ratingFinalized || !rating || !appointmentBelongsToStaff(item, staff) || !appointmentInQuarter(item, year, quarter)) return;
    counts[rating] += 1;
  });
  const total = Object.values(counts).reduce((sum,value)=>sum+value,0);
  const weighted = Object.entries(counts).reduce((sum,[star,count])=>sum + Number(star)*count,0);
  return { counts, total, average: total ? weighted/total : 0 };
}
function staffRatingStats(staff) {
  const active = activeEvaluationQuarter(new Date());
  return staffRatingStatsForQuarter(staff, active.year, active.quarter);
}
function criterionPriority(label='') {
  const match = String(label).match(/(\d+)/);
  return match ? Number(match[1]) : 999;
}
function classifyStaffQuarter(stats, criteria = staffRatingCriteriaStore()) {
  if (!stats || !stats.total) return 'Chưa xếp loại';
  const sorted = criteria.slice().sort((a,b)=>criterionPriority(a.classification)-criterionPriority(b.classification));
  const groups = [];
  sorted.forEach(rule => {
    const key = String(rule.classification || '').trim() || 'Chưa xếp loại';
    let group = groups.find(item=>item.classification===key);
    if (!group) { group={classification:key,rules:[]}; groups.push(group); }
    group.rules.push(rule);
  });
  for (const group of groups) {
    const passed = group.rules.some(rule => stats.total >= Number(rule.minCustomers || 0) && stats.average >= Number(rule.minAverage || 0));
    if (passed) return group.classification;
  }
  return 'Chưa đạt tiêu chí';
}
function quarterStatsSnapshot(year, quarter) {
  const staff = staffStore();
  return staff.reduce((acc,item)=>{
    acc[item.id] = staffRatingStatsForQuarter(item,year,quarter);
    return acc;
  },{});
}
function archiveClosedQuartersV42(now=new Date()) {
  const archive = staffQuarterArchiveStore();
  let changed = false;
  const appointments = appointmentStore().filter(item=>item?.ratingFinalized && Number(item?.rating)>=1 && Number(item?.rating)<=5);
  const periods = new Set();
  appointments.forEach(item=>{
    const date=localDateFromAppointment(item);
    if (!date) return;
    periods.add(`${date.getFullYear()}-Q${quarterNumberFromDate(date)}`);
  });
  // Luôn xét thêm 8 quý gần nhất để khi chưa có dữ liệu vẫn có cấu trúc ổn định.
  let cursorYear=now.getFullYear(), cursorQuarter=quarterNumberFromDate(now);
  for (let i=0;i<8;i++) {
    periods.add(`${cursorYear}-Q${cursorQuarter}`);
    const prev=previousQuarter(cursorYear,cursorQuarter); cursorYear=prev.year; cursorQuarter=prev.quarter;
  }
  [...periods].forEach(key=>{
    const match=key.match(/^(\d{4})-Q([1-4])$/);
    if (!match) return;
    const year=Number(match[1]), quarter=Number(match[2]);
    const bounds=quarterBounds(year,quarter);
    if (now < bounds.closeAt) return;
    // Lưu snapshot số liệu, còn xếp loại được tính lại theo bộ tiêu chí hiện hành.
    const snapshot={year,quarter,closedAt:bounds.closeAt.toISOString(),staff:quarterStatsSnapshot(year,quarter)};
    const serialized=JSON.stringify(snapshot);
    if (JSON.stringify(archive[key]||null)!==serialized) { archive[key]=snapshot; changed=true; }
  });
  if (changed) saveStaffQuarterArchiveStore(archive);
  return archive;
}
function statsForQuarterStaff(staff, year, quarter) {
  const bounds=quarterBounds(year,quarter);
  const archive=staffQuarterArchiveStore();
  const archived=archive[bounds.key]?.staff?.[staff.id];
  if (archived && new Date() >= bounds.closeAt) return archived;
  return staffRatingStatsForQuarter(staff,year,quarter);
}
function addCalendarYears(date, years) {
  const d = new Date(date.getTime());
  const month = d.getMonth();
  d.setFullYear(d.getFullYear() + years);
  if (d.getMonth() !== month) d.setDate(0);
  return d;
}
function addCalendarMonths(date, months) {
  const d = new Date(date.getTime());
  const originalDay = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const lastDay = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
  d.setDate(Math.min(originalDay,lastDay));
  return d;
}
function staffTenureLabel(startDateValue) {
  if (!startDateValue) return '—';
  const start = new Date(`${startDateValue}T00:00:00`);
  if (Number.isNaN(start.getTime())) return '—';
  const now = new Date();
  const today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
  if (start > today) return 'Chưa đến ngày làm việc';
  let years = today.getFullYear() - start.getFullYear();
  let cursor = addCalendarYears(start, years);
  if (cursor > today) { years -= 1; cursor = addCalendarYears(start, years); }
  let months = (today.getFullYear()-cursor.getFullYear())*12 + (today.getMonth()-cursor.getMonth());
  let monthCursor = addCalendarMonths(cursor, months);
  if (monthCursor > today) { months -= 1; monthCursor = addCalendarMonths(cursor, months); }
  const days = Math.max(0, Math.floor((today - monthCursor) / 86400000));
  return `${years} năm ${months} tháng ${days} ngày`;
}
function updateStaffField(staffId, field, value) {
  const data = staffStore();
  const index = data.findIndex(item => item.id === staffId);
  if (index < 0) return;
  data[index] = { ...data[index], [field]: value };
  if (field === 'fullName') {
    const full = String(value || '').trim();
    data[index].fullName = full;
    data[index].name = staffShortNameFromRecord({fullName:full, name:data[index].name});
  }
  saveStaffStore(data);
  if (field === 'fullName') syncStaffReferencesInAppointments(staffId, data[index].name);
  renderManagerStaffPanel();
}
function renderManagerStaffPanel() {
  const staff = staffStore();
  const now = new Date();
  archiveClosedQuartersV42(now);
  const activeQuarter = activeEvaluationQuarter(now);
  if (managerRatingQuarterLabel) {
    const bounds = quarterBounds(activeQuarter.year,activeQuarter.quarter);
    managerRatingQuarterLabel.textContent = `Quý ${quarterRoman(activeQuarter.quarter)}/${activeQuarter.year} • ${formatDateOnly(bounds.start)} → ${formatDateOnly(bounds.end)} • chuyển quý ${formatDateOnly(bounds.closeAt)}`;
  }
  if (quarterSummaryYear) quarterSummaryYear.textContent = `Năm ${activeQuarter.year}`;

  if (managerStaffTableBody) {
    managerStaffTableBody.innerHTML = staff.map((item,index)=>`
      <tr data-staff-row="${escapeUiText(item.id)}">
        <td>${index+1}</td>
        <td><input class="staff-inline-input staff-name" data-staff-field="fullName" data-staff-id="${escapeUiText(item.id)}" value="${escapeUiText(staffNameForDisplay(item))}" placeholder="Nhập họ và tên"></td>
        <td><input class="staff-inline-input" data-staff-field="phone" data-staff-id="${escapeUiText(item.id)}" value="${escapeUiText(item.phone || '')}" placeholder="Nhập SĐT" inputmode="tel"></td>
        <td><input class="staff-inline-input" data-staff-field="address" data-staff-id="${escapeUiText(item.id)}" value="${escapeUiText(item.address || '')}" placeholder="Nhập địa chỉ"></td>
        <td><input class="staff-inline-input staff-inline-date" data-staff-field="officialStartDate" data-staff-id="${escapeUiText(item.id)}" value="${escapeUiText(item.officialStartDate || '')}" type="date"></td>
        <td class="staff-tenure-cell">${staffTenureLabel(item.officialStartDate)}</td>
        <td class="staff-action-cell"><button class="staff-delete-row-btn" type="button" data-delete-staff="${escapeUiText(item.id)}" title="Xóa nhân viên ${escapeUiText(staffNameForDisplay(item))}"><span>×</span><b>Xóa</b></button></td>
      </tr>`).join('');
    managerStaffTableBody.querySelectorAll('[data-staff-field]').forEach(input => {
      input.addEventListener('change', () => updateStaffField(input.dataset.staffId, input.dataset.staffField, input.value.trim()));
    });
    managerStaffTableBody.querySelectorAll('[data-delete-staff]').forEach(btn => {
      btn.addEventListener('click', () => openStaffDeleteConfirm(btn.dataset.deleteStaff));
    });
  }

  if (managerStaffRatingBody) {
    managerStaffRatingBody.innerHTML = staff.map((item,index)=>{
      const stats = staffRatingStatsForQuarter(item,activeQuarter.year,activeQuarter.quarter);
      return `<tr>
        <td>${index+1}</td>
        <td>${escapeUiText(staffNameForDisplay(item))}</td>
        ${[1,2,3,4,5].map(star=>`<td><span class="rating-count-pill">${stats.counts[star]}</span></td>`).join('')}
        <td><strong>${stats.total}</strong></td>
        <td><strong>${stats.total ? stats.average.toFixed(2) : '—'}</strong></td>
      </tr>`;
    }).join('');
  }
  const activeRated = appointmentStore().filter(item=>{
    const rating=Number(item?.rating)||0;
    return Boolean(item?.ratingFinalized) && rating>=1 && rating<=5 && appointmentInQuarter(item,activeQuarter.year,activeQuarter.quarter);
  }).length;
  if (managerRatingSyncStatus) managerRatingSyncStatus.textContent = `${activeRated} đánh giá trong quý đang hiển thị`;

  renderQuarterSummaryTable(activeQuarter.year,activeQuarter);
  renderRatingCriteriaTable();
  renderStaffApplicationEmployeeOptions();
}
function formatDateOnly(date) {
  try { return new Intl.DateTimeFormat('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric'}).format(date); }
  catch { return date.toLocaleDateString('vi-VN'); }
}
function quarterBadgeClass(classification='') {
  const normalized=normalizePersonText(classification);
  if (normalized.includes('loai 1')) return 'type-1';
  if (normalized.includes('loai 2')) return 'type-2';
  if (normalized.includes('loai 3')) return 'type-3';
  return 'pending';
}
function renderQuarterSummaryTable(year, activeQuarter) {
  if (!managerQuarterSummaryBody) return;
  const now=new Date();
  const staff=staffStore();
  const criteria=staffRatingCriteriaStore();
  managerQuarterSummaryBody.innerHTML = staff.map((item,index)=>{
    const cells=[1,2,3,4].map(quarter=>{
      const bounds=quarterBounds(year,quarter);
      const isFuture=now < bounds.start;
      if (isFuture) return `<td><span class="quarter-result-badge pending">—<small>Chưa đến quý</small></span></td>`;
      const stats=statsForQuarterStaff(item,year,quarter);
      const classification=classifyStaffQuarter(stats,criteria);
      const provisional=activeQuarter.year===year && activeQuarter.quarter===quarter && now < bounds.closeAt;
      const detail=stats.total ? `${stats.total} PV • ${stats.average.toFixed(2)}★` : 'Chưa có đánh giá';
      return `<td><span class="quarter-result-badge ${quarterBadgeClass(classification)} ${provisional ? 'provisional' : ''}">${escapeUiText(classification)}<small>${detail}</small></span></td>`;
    }).join('');
    return `<tr><td>${index+1}</td><td>${escapeUiText(staffNameForDisplay(item))}</td>${cells}</tr>`;
  }).join('');
}
function renderRatingCriteriaTable() {
  if (!managerRatingCriteriaBody) return;
  const criteria=staffRatingCriteriaStore();
  managerRatingCriteriaBody.innerHTML=criteria.map(item=>`
    <tr data-rating-criterion="${escapeUiText(item.id)}">
      <td><input class="rating-criterion-input" data-criterion-field="classification" value="${escapeUiText(item.classification)}" aria-label="Xếp loại"></td>
      <td><input class="rating-criterion-input" data-criterion-field="minCustomers" type="number" min="0" step="1" value="${Number(item.minCustomers)||0}" aria-label="Số khách tối thiểu"></td>
      <td><input class="rating-criterion-input" data-criterion-field="minAverage" type="number" min="0" max="5" step="0.1" value="${Number(item.minAverage)||0}" aria-label="Điểm sao trung bình tối thiểu"></td>
      <td><input class="rating-criterion-input" data-criterion-field="note" value="${escapeUiText(item.note||'')}" placeholder="Ghi chú tiêu chí"></td>
      <td><button class="rating-criterion-delete" type="button" data-delete-rating-criterion="${escapeUiText(item.id)}">Xóa</button></td>
    </tr>`).join('');
  managerRatingCriteriaBody.querySelectorAll('[data-rating-criterion]').forEach(row=>{
    row.querySelectorAll('[data-criterion-field]').forEach(input=>{
      input.addEventListener('change',()=>{
        const data=staffRatingCriteriaStore();
        const index=data.findIndex(item=>item.id===row.dataset.ratingCriterion);
        if (index<0) return;
        const field=input.dataset.criterionField;
        let value=input.value;
        if (field==='minCustomers') value=Math.max(0,Number(value)||0);
        if (field==='minAverage') value=Math.max(0,Math.min(5,Number(value)||0));
        data[index][field]=value;
        saveStaffRatingCriteriaStore(data);
        renderManagerStaffPanel();
      });
    });
  });
  managerRatingCriteriaBody.querySelectorAll('[data-delete-rating-criterion]').forEach(btn=>btn.addEventListener('click',()=>{
    const data=staffRatingCriteriaStore().filter(item=>item.id!==btn.dataset.deleteRatingCriterion);
    if (!data.length) { showToast('Cần giữ lại ít nhất một tiêu chí xếp loại.'); return; }
    saveStaffRatingCriteriaStore(data);
    renderManagerStaffPanel();
    showToast('Đã xóa tiêu chí xếp loại.');
  }));
}
function addRatingCriterion() {
  const data=staffRatingCriteriaStore();
  const highest=data.reduce((max,item)=>Math.max(max,criterionPriority(item.classification)===999?0:criterionPriority(item.classification)),0);
  data.push({id:`criterion-${Date.now()}`,classification:`Loại ${highest+1 || 1}`,minCustomers:0,minAverage:0,note:'Tiêu chí mới'});
  saveStaffRatingCriteriaStore(data);
  renderManagerStaffPanel();
  requestAnimationFrame(()=>managerRatingCriteriaBody?.querySelector(`[data-rating-criterion="${data[data.length-1].id}"] input`)?.focus());
  showToast('Đã thêm một dòng tiêu chí mới.');
}
function addStaffRow() {
  const data = staffStore();
  const id = `staff-${Date.now()}`;
  data.push({id,name:'',fullName:'',phone:'',address:'',officialStartDate:'',role:'Kỹ thuật viên',active:true});
  saveStaffStore(data);
  renderManagerStaffPanel();
  requestAnimationFrame(()=>managerStaffTableBody?.querySelector(`[data-staff-row="${id}"] .staff-name`)?.focus());
  showToast('Đã thêm một dòng nhân viên mới. Bạn có thể nhập thông tin trực tiếp trên bảng.');
}
let pendingStaffDeleteId = null;
function staffDeleteImpact(staff) {
  const appointments = appointmentStore().filter(item => appointmentBelongsToStaff(item, staff));
  return {
    applications: staffApplicationStore().filter(doc => doc.staffId === staff.id).length,
    completed: appointments.filter(item => Boolean(item.completed)).length,
    active: appointments.filter(item => !item.completed).length
  };
}
function openStaffDeleteConfirm(staffId) {
  const staff = staffStore().find(item => item.id === staffId);
  if (!staff || !staffDeleteBackdrop) return;
  pendingStaffDeleteId = staffId;
  const impact = staffDeleteImpact(staff);
  const displayName = staffNameForDisplay(staff) || 'nhân viên này';
  if (staffDeleteTitle) staffDeleteTitle.textContent = `Xóa nhân viên ${displayName}?`;
  if (staffDeleteMessage) staffDeleteMessage.textContent = 'Nhân viên sẽ biến mất khỏi danh sách hoạt động, danh sách NV phục vụ phía Khách và các lựa chọn cho lịch mới.';
  if (staffDeleteSummary) staffDeleteSummary.innerHTML = `
    <div><span>Hồ sơ xin việc sẽ xóa</span><strong>${impact.applications}</strong></div>
    <div><span>Lịch chưa Hoàn thành sẽ bỏ gán NV</span><strong>${impact.active}</strong></div>
    <div><span>Lịch đã Hoàn thành được giữ lịch sử</span><strong>${impact.completed}</strong></div>`;
  staffDeleteBackdrop.classList.add('open');
  staffDeleteBackdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeStaffDeleteConfirm() {
  pendingStaffDeleteId = null;
  staffDeleteBackdrop?.classList.remove('open');
  staffDeleteBackdrop?.setAttribute('aria-hidden','true');
  if (![staffApplicationBackdrop,staffApplicationPreviewBackdrop,customerProfileBackdrop,managerScheduleBackdrop,myScheduleBackdrop,bookingBackdrop].some(el=>el?.classList?.contains('open'))) document.body.style.overflow='';
}
function deleteStaffCascade(staffId) {
  const current = staffStore();
  const staff = current.find(item => item.id === staffId);
  if (!staff) { closeStaffDeleteConfirm(); return; }
  const deletedAt = new Date().toISOString();
  const shortName = staffShortNameFromRecord(staff) || staff.name || '';
  const fullName = staffNameForDisplay(staff) || shortName || 'Nhân viên';

  const archive = staffArchiveStore();
  archive.unshift({...staff, deletedAt});
  saveStaffArchiveStore(archive);

  saveStaffStore(current.filter(item => item.id !== staffId));

  const docs = staffApplicationStore();
  const keptDocs = docs.filter(doc => doc.staffId !== staffId);
  if (keptDocs.length !== docs.length) saveStaffApplicationStore(keptDocs);

  const appointments = appointmentStore();
  let appointmentChanged = false;
  appointments.forEach(item => {
    if (!appointmentBelongsToStaff(item, staff)) return;
    if (item.completed) {
      if (!item.serviceStaffId) item.serviceStaffId = staffId;
      if (!item.serviceStaffName) item.serviceStaffName = shortName;
      if (item.rating && !item.ratingStaffName) item.ratingStaffName = shortName;
      item.serviceStaffArchived = true;
      item.serviceStaffArchivedAt = deletedAt;
      item.serviceStaffArchivedFullName = fullName;
      appointmentChanged = true;
      return;
    }
    item.serviceStaffId = '';
    item.serviceStaffName = '';
    item.serviceStaffArchived = false;
    if (item.rating || item.ratingFinalized || item.ratingStaffName) {
      item.rating = 0;
      item.ratingStaffName = '';
      item.ratingFinalized = false;
      item.ratingFinalizedAt = null;
    }
    appointmentChanged = true;
  });
  if (appointmentChanged) saveAppointmentStore(appointments);

  closeStaffApplicationPreviewModal();
  closeStaffDeleteConfirm();
  renderManagerStaffPanel();
  renderStaffApplicationEmployeeOptions();
  if (staffApplicationBackdrop?.classList.contains('open')) renderStaffApplicationList();
  const session = getSession();
  if (session?.role === 'Quản lý' && managerScheduleBackdrop?.classList.contains('open')) renderManagerSchedule(session);
  if (session?.role === 'Quản lý' && document.querySelector('[data-manager-config-panel="customers"]')?.classList.contains('is-active')) renderManagerCustomerPanel();
  showToast(`Đã xóa ${fullName}. Lịch đã Hoàn thành vẫn giữ lịch sử nhân viên.`);
}
function renderStaffApplicationEmployeeOptions() {
  if (!staffApplicationEmployeeSelect) return;
  const current = staffApplicationEmployeeSelect.value;
  const options = staffStore().filter(item => staffNameForDisplay(item)).map(item=>`<option value="${escapeUiText(item.id)}">${escapeUiText(staffNameForDisplay(item))}</option>`).join('');
  staffApplicationEmployeeSelect.innerHTML = `<option value="candidate">Ứng viên mới / chưa tạo nhân viên</option>${options}`;
  if ([...staffApplicationEmployeeSelect.options].some(opt=>opt.value===current)) staffApplicationEmployeeSelect.value=current;
}
function formatFileSize(bytes=0) {
  const n=Number(bytes)||0;
  if (n < 1024) return `${n} B`;
  if (n < 1024*1024) return `${(n/1024).toFixed(1)} KB`;
  return `${(n/(1024*1024)).toFixed(1)} MB`;
}
function openStaffApplicationLibrary() {
  const session=getSession();
  if (session?.role !== 'Quản lý') return;
  renderStaffApplicationEmployeeOptions();
  renderStaffApplicationList();
  if (staffApplicationMessage) staffApplicationMessage.textContent='';
  staffApplicationBackdrop?.classList.add('open');
  staffApplicationBackdrop?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeStaffApplicationLibraryModal() {
  staffApplicationBackdrop?.classList.remove('open');
  staffApplicationBackdrop?.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function staffDocumentTypeLabel(doc) {
  const name=String(doc?.fileName||'').toLowerCase();
  const type=String(doc?.fileType||'').toLowerCase();
  if (type.includes('pdf') || name.endsWith('.pdf')) return 'PDF';
  if (type.startsWith('image/') || /\.(png|jpe?g|webp|gif)$/i.test(name)) return 'ẢNH';
  if (name.endsWith('.docx') || type.includes('officedocument.wordprocessingml')) return 'DOCX';
  if (name.endsWith('.doc') || type.includes('msword')) return 'DOC';
  return 'FILE';
}
function renderStaffApplicationList() {
  if (!staffApplicationList) return;
  const staff = staffStore();
  const docs = staffApplicationStore().slice().sort((a,b)=>new Date(b.uploadedAt||0)-new Date(a.uploadedAt||0));
  if (!docs.length) {
    staffApplicationList.innerHTML='<div class="staff-application-empty"><strong>Chưa có hồ sơ nào</strong><p>Khi có nhân viên hoặc ứng viên mới, bạn có thể tải file hồ sơ tại đây.</p></div>';
    return;
  }
  staffApplicationList.innerHTML=docs.map(doc=>{
    const employee=staff.find(item=>item.id===doc.staffId);
    const person=doc.staffId==='candidate' ? 'Ứng viên mới' : (employee ? staffNameForDisplay(employee) : (doc.staffName||'Nhân viên'));
    return `<div class="staff-application-item" data-staff-doc="${escapeUiText(doc.id)}" title="Bấm để xem trực tiếp hồ sơ">
      <span class="staff-application-item-icon">${staffDocumentTypeLabel(doc)}</span>
      <div><strong>${escapeUiText(doc.fileName||'Hồ sơ')}</strong><small>${escapeUiText(person)} • ${formatFileSize(doc.size)} • ${formatPromotionMoment(doc.uploadedAt)} • Bấm để xem</small></div>
      <a class="staff-application-download" href="${doc.dataUrl}" download="${escapeUiText(doc.fileName||'ho-so')}">Tải xuống</a>
      <button class="staff-application-delete" type="button" data-delete-staff-doc="${escapeUiText(doc.id)}">Xóa</button>
    </div>`;
  }).join('');
  staffApplicationList.querySelectorAll('[data-staff-doc]').forEach(item=>item.addEventListener('click',event=>{
    if (event.target.closest('.staff-application-download,.staff-application-delete')) return;
    openStaffApplicationPreview(item.dataset.staffDoc);
  }));
  staffApplicationList.querySelectorAll('[data-delete-staff-doc]').forEach(btn=>btn.addEventListener('click',event=>{
    event.stopPropagation();
    const next=staffApplicationStore().filter(item=>item.id!==btn.dataset.deleteStaffDoc);
    saveStaffApplicationStore(next);
    renderStaffApplicationList();
    showToast('Đã xóa hồ sơ khỏi thư viện.');
  }));
}
function dataUrlToArrayBuffer(dataUrl='') {
  const parts=String(dataUrl).split(',');
  const base64=parts[1]||'';
  const binary=atob(base64);
  const bytes=new Uint8Array(binary.length);
  for (let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
  return bytes.buffer;
}
function xmlText(node) {
  if (!node) return '';
  const pieces=[];
  const walk=current=>{
    if (current.nodeType===3) pieces.push(current.nodeValue||'');
    if (current.nodeType!==1) return;
    const name=current.localName;
    if (name==='tab') pieces.push('\t');
    if (name==='br' || name==='cr') pieces.push('\n');
    [...current.childNodes].forEach(walk);
  };
  walk(node);
  return pieces.join('').replace(/\s+\n/g,'\n').trim();
}
function docxParagraphHtml(paragraph) {
  const text=xmlText(paragraph);
  return text ? `<p>${escapeUiText(text).replace(/\n/g,'<br>')}</p>` : '<p>&nbsp;</p>';
}
function docxTableHtml(table) {
  const rows=[...table.childNodes].filter(node=>node.nodeType===1 && node.localName==='tr');
  if (!rows.length) return '';
  return `<table><tbody>${rows.map(row=>{
    const cells=[...row.childNodes].filter(node=>node.nodeType===1 && node.localName==='tc');
    return `<tr>${cells.map(cell=>`<td>${escapeUiText(xmlText(cell)).replace(/\n/g,'<br>')}</td>`).join('')}</tr>`;
  }).join('')}</tbody></table>`;
}
async function renderDocxPreview(doc) {
  if (!staffApplicationPreviewViewer) return;
  if (typeof JSZip === 'undefined') {
    staffApplicationPreviewViewer.innerHTML='<div class="staff-preview-message"><strong>Không tải được bộ đọc DOCX.</strong><span>Bạn vẫn có thể tải file xuống bằng nút phía dưới.</span></div>';
    return;
  }
  try {
    const zip=await JSZip.loadAsync(dataUrlToArrayBuffer(doc.dataUrl));
    const documentFile=zip.file('word/document.xml');
    if (!documentFile) throw new Error('missing document.xml');
    const xml=await documentFile.async('text');
    const parsed=new DOMParser().parseFromString(xml,'application/xml');
    const body=[...parsed.getElementsByTagName('*')].find(node=>node.localName==='body');
    if (!body) throw new Error('missing body');
    const html=[...body.childNodes].filter(node=>node.nodeType===1).map(node=>{
      if (node.localName==='p') return docxParagraphHtml(node);
      if (node.localName==='tbl') return docxTableHtml(node);
      return '';
    }).join('');
    staffApplicationPreviewViewer.innerHTML=`<article class="staff-docx-preview">${html || '<p>Không tìm thấy nội dung chữ trong file DOCX.</p>'}</article>`;
  } catch {
    staffApplicationPreviewViewer.innerHTML='<div class="staff-preview-message"><strong>Chưa thể đọc nội dung DOCX này.</strong><span>File vẫn được lưu an toàn trong thư viện. Bạn có thể tải xuống để mở bằng Word.</span></div>';
  }
}
async function openStaffApplicationPreview(docId='') {
  const doc=staffApplicationStore().find(item=>item.id===docId);
  if (!doc || !staffApplicationPreviewBackdrop) return;
  const staff=staffStore();
  const employee=staff.find(item=>item.id===doc.staffId);
  const person=doc.staffId==='candidate' ? 'Ứng viên mới' : (employee ? staffNameForDisplay(employee) : (doc.staffName||'Nhân viên'));
  if (staffApplicationPreviewPerson) staffApplicationPreviewPerson.textContent=person;
  if (staffApplicationPreviewTitle) staffApplicationPreviewTitle.textContent=doc.fileName||'Hồ sơ xin việc';
  if (staffApplicationPreviewMeta) staffApplicationPreviewMeta.textContent=`${staffDocumentTypeLabel(doc)} • ${formatFileSize(doc.size)} • ${formatPromotionMoment(doc.uploadedAt)}`;
  if (staffApplicationPreviewDownload) {
    staffApplicationPreviewDownload.href=doc.dataUrl||'#';
    staffApplicationPreviewDownload.download=doc.fileName||'ho-so';
  }
  if (staffApplicationPreviewViewer) staffApplicationPreviewViewer.innerHTML='<div class="staff-preview-message"><strong>Đang mở hồ sơ…</strong></div>';
  staffApplicationPreviewBackdrop.classList.add('open');
  staffApplicationPreviewBackdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  const kind=staffDocumentTypeLabel(doc);
  if (kind==='PDF') {
    staffApplicationPreviewViewer.innerHTML=`<iframe src="${doc.dataUrl}" title="Xem PDF ${escapeUiText(doc.fileName||'')}"></iframe>`;
  } else if (kind==='ẢNH') {
    staffApplicationPreviewViewer.innerHTML=`<img src="${doc.dataUrl}" alt="${escapeUiText(doc.fileName||'Hồ sơ')}">`;
  } else if (kind==='DOCX') {
    await renderDocxPreview(doc);
  } else {
    staffApplicationPreviewViewer.innerHTML='<div class="staff-preview-message"><strong>Định dạng Word .DOC cũ chưa thể render trực tiếp trong bản HTML offline.</strong><span>Nếu cần xem ngay trong app, hãy lưu hồ sơ dưới dạng DOCX, PDF hoặc ảnh. Nút Tải xuống vẫn hoạt động bình thường.</span></div>';
  }
}
function closeStaffApplicationPreviewModal() {
  staffApplicationPreviewBackdrop?.classList.remove('open');
  staffApplicationPreviewBackdrop?.setAttribute('aria-hidden','true');
  if (staffApplicationPreviewViewer) staffApplicationPreviewViewer.innerHTML='';
  document.body.style.overflow=staffApplicationBackdrop?.classList.contains('open') ? 'hidden' : '';
}
function uploadStaffApplication(event) {
  event.preventDefault();
  const file=staffApplicationFile?.files?.[0];
  if (!file) { if (staffApplicationMessage) staffApplicationMessage.textContent='Vui lòng chọn file hồ sơ.'; return; }
  if (file.size > 1.5*1024*1024) { if (staffApplicationMessage) staffApplicationMessage.textContent='Bản HTML thử nghiệm giới hạn file khoảng 1,5 MB để tránh đầy bộ nhớ trình duyệt.'; return; }
  const staffId=staffApplicationEmployeeSelect?.value || 'candidate';
  const employee=staffStore().find(item=>item.id===staffId);
  const reader=new FileReader();
  reader.onload=()=>{
    try {
      const docs=staffApplicationStore();
      docs.unshift({id:`staff-doc-${Date.now()}`,staffId,staffName:employee?staffNameForDisplay(employee):'Ứng viên mới',fileName:file.name,fileType:file.type,size:file.size,uploadedAt:new Date().toISOString(),dataUrl:String(reader.result||'')});
      saveStaffApplicationStore(docs);
      if (staffApplicationFile) staffApplicationFile.value='';
      if (staffApplicationMessage) { staffApplicationMessage.className='form-message ok'; staffApplicationMessage.textContent='Đã lưu hồ sơ vào thư viện.'; }
      renderStaffApplicationList();
    } catch {
      if (staffApplicationMessage) staffApplicationMessage.textContent='Không thể lưu file. Hãy thử file nhỏ hơn.';
    }
  };
  reader.onerror=()=>{ if (staffApplicationMessage) staffApplicationMessage.textContent='Không đọc được file này.'; };
  reader.readAsDataURL(file);
}

function setManagerConfigPanel(panelKey='staff') {
  managerConfigMenuButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.managerConfigMenu === panelKey));
  managerConfigPanels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.managerConfigPanel === panelKey));
  if (panelKey === 'staff') renderManagerStaffPanel();
  if (panelKey === 'customers') renderManagerCustomerPanel();
  if (panelKey === 'finance') setManagerFinanceView(document.querySelector('[data-manager-finance-menu].is-active')?.dataset.managerFinanceMenu || 'overview');
}
function openManagerConfigWorkspace(panelKey='staff') {
  const session = getSession();
  if (session?.role !== 'Quản lý') return;
  if (managerConfigWorkspace) managerConfigWorkspace.hidden = false;
  document.body.classList.add('manager-config-mode');
  setManagerConfigPanel(panelKey);
  window.scrollTo({ top:0, behavior:'smooth' });
}
function closeManagerConfigWorkspace() {
  if (managerConfigWorkspace) managerConfigWorkspace.hidden = true;
  document.body.classList.remove('manager-config-mode');
}

// =========================
// VISION 59 — STAFF WORKSPACE
// =========================
let currentStaffPanelV59 = 'overview';
const STAFF_WORK_STATUS_LABELS_V59 = {
  scheduled:'Chờ phục vụ',
  'in-progress':'Đang phục vụ',
  'service-done':'Đã xong phần phục vụ'
};
function ensureDemoStaffProfileV59(){
  const demo=DEMO_LOGIN_ACCOUNTS['Nhân viên'];
  if(!demo) return;
  const list=staffStore();
  const phone=normalizePhone(demo.phone||'');
  const byPhone=list.find(item=>phone && normalizePhone(item.phone||'')===phone);
  const byName=list.find(item=>normalizePersonText(staffNameForDisplay(item))===normalizePersonText(demo.name));
  const archived=staffArchiveStore().some(item=>(phone && normalizePhone(item?.phone||'')===phone) || normalizePersonText(item?.fullName||item?.name||'')===normalizePersonText(demo.name));
  if(archived && !byPhone && !byName) return;
  if(byPhone || byName){
    const target=byPhone||byName;
    let changed=false;
    if(!target.phone){target.phone=phone;changed=true;}
    if(!target.fullName){target.fullName=demo.name;changed=true;}
    if(changed) saveStaffStore(list);
    return;
  }
  list.push(normalizeStaffRecord({id:'staff-nhung',name:'Nhung',fullName:demo.name,phone,address:'',officialStartDate:'',role:'Kỹ thuật viên',active:true},list.length));
  saveStaffStore(list);
}
function staffProfileForSessionV59(session=getSession()){
  if(!session || session.role!=='Nhân viên') return null;
  const phone=normalizePhone(session.phone||'');
  const normalizedName=normalizePersonText(session.name||'');
  const active=staffStore().filter(item=>item.active!==false);
  return active.find(item=>phone && normalizePhone(item.phone||'')===phone)
    || active.find(item=>normalizePersonText(staffNameForDisplay(item))===normalizedName)
    || active.find(item=>{
      const short=normalizePersonText(staffShortNameFromRecord(item));
      const last=normalizedName.split(' ').pop();
      return short && last && short===last;
    })
    || {id:`staff-account-${phone||'unknown'}`,name:(session.name||'Nhân viên').trim().split(/\s+/).pop(),fullName:session.name||'Nhân viên',phone:session.phone||'',address:'',officialStartDate:'',role:'Kỹ thuật viên',active:true,accountOnly:true};
}
function staffAppointmentsV59(profile=staffProfileForSessionV59()){
  if(!profile) return [];
  return appointmentStore()
    .filter(item=>appointmentBelongsToStaff(item,profile))
    .filter(item=>!appointmentIsDeclined(item.status))
    .sort((a,b)=>new Date(a.startAt||0)-new Date(b.startAt||0));
}
function staffAppointmentDateKeyV59(item){
  const date=new Date(item?.startAt||0);
  if(Number.isNaN(date.getTime())) return '';
  return dailyLocalDateKey(date);
}
function staffWorkStatusV59(item){
  if(item?.completed) return 'manager-completed';
  return item?.staffWorkStatus || 'scheduled';
}
function staffReadableDateV59(item){
  const date=new Date(item?.startAt||0);
  if(Number.isNaN(date.getTime())) return item?.displayDate||'—';
  return date.toLocaleDateString('vi-VN',{weekday:'short',day:'2-digit',month:'2-digit'});
}
function staffTimeRangeV59(item){
  return `${item?.displayTime||'—'} – ${item?.displayEndTime||'—'}`;
}
function staffAppointmentsTodayV59(profile=staffProfileForSessionV59()){
  const key=dailyLocalDateKey();
  return staffAppointmentsV59(profile).filter(item=>staffAppointmentDateKeyV59(item)===key);
}
function staffNextAppointmentV59(profile=staffProfileForSessionV59()){
  const now=Date.now();
  return staffAppointmentsV59(profile).find(item=>{
    if(item.completed || !appointmentIsAccepted(item.status)) return false;
    const end=new Date(item.endAt||item.startAt||0).getTime();
    return Number.isFinite(end) && end>=now;
  }) || null;
}
function staffDisplayStatusV59(item){
  if(item.completed) return 'Quản lý đã hoàn tất';
  const work=staffWorkStatusV59(item);
  return STAFF_WORK_STATUS_LABELS_V59[work] || (appointmentIsAccepted(item.status)?'Đã nhận lịch':(item.status||'Chờ xác nhận'));
}
function staffRenderIdentityV59(session=getSession(),profile=staffProfileForSessionV59(session)){
  if(!staffIdentityCard) return;
  const display=profile?.fullName||session?.name||'Nhân viên';
  staffIdentityCard.innerHTML=`<span class="staff-identity-avatar">${escapeUiText(initialsForName(display))}</span><div><strong>${escapeUiText(display)}</strong><span>${escapeUiText(profile?.role||'Nhân viên')} • ${escapeUiText(session?.phone||profile?.phone||'')}</span></div>`;
}
function staffMetricCardV59(label,value,note){return `<article class="staff-metric-card"><small>${label}</small><strong>${value}</strong><span>${note}</span></article>`;}
function renderStaffOverviewV59(){
  const session=getSession(), profile=staffProfileForSessionV59(session); if(!session||session.role!=='Nhân viên'||!profile)return;
  const now=Date.now();
  const allAccepted=staffAppointmentsV59(profile).filter(item=>appointmentIsAccepted(item.status));
  const todayKey=dailyLocalDateKey();
  const today=allAccepted.filter(item=>staffAppointmentDateKeyV59(item)===todayKey);
  const upcoming=allAccepted.filter(item=>!item.completed && new Date(item.endAt||item.startAt||0).getTime()>=now);
  const future=upcoming.filter(item=>staffAppointmentDateKeyV59(item)!==todayKey);
  const inProgress=today.filter(item=>staffWorkStatusV59(item)==='in-progress').length;
  const serviceDone=today.filter(item=>staffWorkStatusV59(item)==='service-done'||item.completed).length;
  const next=staffNextAppointmentV59(profile);
  const hours=shopHoursForDate(todayKey);
  if(staffOverviewMetrics) staffOverviewMetrics.innerHTML=[
    staffMetricCardV59('KHÁCH HÔM NAY',today.length,today.length?'Các lịch đã được tiệm xác nhận và phân cho bạn.':'Hôm nay chưa có lịch được phân.'),
    staffMetricCardV59('LỊCH TƯƠNG LAI',future.length,future.length?'Các lịch đã nhận từ ngày mai trở đi.':'Chưa có lịch tương lai.'),
    staffMetricCardV59('ĐANG PHỤC VỤ',inProgress,inProgress?'Có dịch vụ đang ở trạng thái thực hiện.':'Không có dịch vụ đang thực hiện.'),
    staffMetricCardV59('ĐÃ XONG PHỤC VỤ',serviceDone,'Trạng thái công việc của Nhân viên, chưa thay thế Hoàn thành của Quản lý.'),
    staffMetricCardV59('GIỜ MỞ TIỆM',`${hours.open}–${hours.close}`,hours.isOverride?'Hôm nay Quản lý đã đặt giờ mở tiệm ngoại lệ.':'Đang dùng giờ mở tiệm mặc định.')
  ].join('');
  if(staffNextAppointment){
    if(!next) staffNextAppointment.innerHTML='<div class="staff-empty"><strong>Không còn lịch sắp tới</strong><span>Khi Quản lý phân thêm khách cho bạn, lịch gần nhất sẽ xuất hiện ở đây.</span></div>';
    else {
      const nextDate=staffReadableDateV59(next);
      staffNextAppointment.innerHTML=`<article class="staff-next-appointment"><div class="time">${escapeUiText(next.displayTime||'—')}</div><div class="next-date">${escapeUiText(nextDate)}</div><h3>${escapeUiText(next.customerName||'Khách hàng')}</h3><p><b>${escapeUiText(next.serviceName||'Dịch vụ')}</b> • ${escapeUiText(next.displayEndTime||'—')} kết thúc dự kiến</p><p>${next.note?`Ghi chú: ${escapeUiText(next.note)}`:'Khách không để lại ghi chú.'}</p><div class="chips"><span>${next.tableNumber?`BÀN ${escapeUiText(next.tableNumber)}`:'Chưa gán bàn'}</span><span>${escapeUiText(staffDisplayStatusV59(next))}</span></div></article>`;
    }
  }
  if(staffTodaySchedule){
    const futureUpcoming=upcoming.filter(item=>staffAppointmentDateKeyV59(item)!==todayKey);
    const shown=[...today,...futureUpcoming].filter((item,index,arr)=>arr.findIndex(row=>row.id===item.id)===index).slice(0,12);
    staffTodaySchedule.innerHTML=shown.length?shown.map(item=>{
      const isToday=staffAppointmentDateKeyV59(item)===todayKey;
      const dateLabel=isToday?'Hôm nay':staffReadableDateV59(item);
      return `<article class="staff-mini-row ${isToday?'is-today':'is-future'}"><time><b>${escapeUiText(item.displayTime||'—')}</b><small>${escapeUiText(dateLabel)}</small></time><span><strong>${escapeUiText(item.customerName||'Khách hàng')}</strong><small>${escapeUiText(item.serviceName||'Dịch vụ')} • ${item.tableNumber?`Bàn ${escapeUiText(item.tableNumber)}`:'Chưa gán bàn'}</small></span><span class="state">${escapeUiText(staffDisplayStatusV59(item))}</span></article>`;
    }).join(''):'<div class="staff-empty"><strong>Chưa có lịch hôm nay hoặc tương lai</strong><span>Khi Quản lý xác nhận và phân bạn phục vụ, lịch sẽ xuất hiện tại đây.</span></div>';
    const totalShownPool=[...today,...futureUpcoming].filter((item,index,arr)=>arr.findIndex(row=>row.id===item.id)===index);
    if(totalShownPool.length>12) staffTodaySchedule.insertAdjacentHTML('beforeend',`<div class="staff-overview-more">Còn ${totalShownPool.length-12} lịch khác • mở “Lịch của tôi” để xem đầy đủ.</div>`);
  }
}
function staffScheduleActionMarkupV59(item){
  if(item.completed) return '<button class="staff-work-action done" type="button" disabled>Quản lý đã hoàn tất</button>';
  if(!appointmentIsAccepted(item.status)) return `<button class="staff-work-action done" type="button" disabled>${escapeUiText(item.status||'Chờ xác nhận')}</button>`;
  const status=staffWorkStatusV59(item);
  if(status==='scheduled') return `<button class="staff-work-action primary" type="button" data-staff-work-action="start" data-staff-appointment="${escapeUiText(item.id)}">Bắt đầu phục vụ</button>`;
  if(status==='in-progress') return `<button class="staff-work-action primary" type="button" data-staff-work-action="done" data-staff-appointment="${escapeUiText(item.id)}">Hoàn thành phục vụ</button>`;
  return '<button class="staff-work-action done" type="button" disabled>✓ Đã xong phần phục vụ</button>';
}
function renderStaffScheduleV59(){
  const profile=staffProfileForSessionV59(); if(!profile)return;
  const all=staffAppointmentsV59(profile).filter(item=>appointmentIsAccepted(item.status)||item.completed);
  const upcoming=all.filter(item=>!item.completed && new Date(item.endAt||item.startAt||0).getTime()>=Date.now());
  if(staffScheduleSummary) staffScheduleSummary.innerHTML=`<span class="staff-summary-chip">Sắp tới: <b>${upcoming.length}</b></span><span class="staff-summary-chip">Đang phục vụ: <b>${all.filter(x=>staffWorkStatusV59(x)==='in-progress').length}</b></span><span class="staff-summary-chip">Đã xong phần phục vụ: <b>${all.filter(x=>staffWorkStatusV59(x)==='service-done').length}</b></span><span class="staff-summary-chip">Lịch sử Hoàn thành: <b>${all.filter(x=>x.completed).length}</b></span>`;
  const rows=all.slice().sort((a,b)=>{
    const aDone=a.completed?1:0,bDone=b.completed?1:0;if(aDone!==bDone)return aDone-bDone;return new Date(a.startAt||0)-new Date(b.startAt||0);
  });
  if(staffScheduleList) staffScheduleList.innerHTML=rows.length?rows.map(item=>{
    const status=staffWorkStatusV59(item); const cls=item.completed||status==='service-done'?'is-done':status==='in-progress'?'is-progress':'';
    return `<article class="staff-schedule-row ${cls}"><div class="datebox"><strong>${escapeUiText(item.displayTime||'—')}</strong><small>${escapeUiText(staffReadableDateV59(item))}</small></div><div><h3>${escapeUiText(item.customerName||'Khách hàng')} • ${escapeUiText(item.serviceName||'Dịch vụ')}</h3><p>${escapeUiText(staffTimeRangeV59(item))}${item.tableNumber?` • Bàn ${escapeUiText(item.tableNumber)}`:''}</p><p>${item.note?`Ghi chú: ${escapeUiText(item.note)}`:'Không có ghi chú của khách.'}</p><div class="chips"><span>${escapeUiText(staffDisplayStatusV59(item))}</span>${item.nailSample?`<span>${escapeUiText(item.nailSample)}</span>`:''}</div></div><div><p><b>Giá:</b> ${escapeUiText(item.price||'—')}</p><p><b>Nguồn:</b> ${escapeUiText(item.bookingSourceLabel||item.bookingSource||'APP khách')}</p></div><div class="staff-schedule-actions">${staffScheduleActionMarkupV59(item)}</div></article>`;
  }).join(''):'<div class="staff-empty"><strong>Chưa có lịch được phân</strong><span>Khi Quản lý chọn bạn tại cột NV PV, lịch sẽ tự xuất hiện tại đây.</span></div>';
}
function renderStaffServicesV59(){
  if(!staffServicesGrid)return;
  const ids=[...DEFAULT_SERVICE_IDS,...customServiceItems().map(item=>item.id)].filter((id,index,arr)=>id&&arr.indexOf(id)===index&&isServiceActive(id)&&SERVICE_DATA[id]);
  staffServicesGrid.innerHTML=ids.length?ids.map(id=>{
    const service=SERVICE_DATA[id], steps=Array.isArray(service.steps)&&service.steps.length?service.steps:[];
    return `<article class="staff-service-card"><div class="staff-service-head"><img src="${escapeUiText(service.image||'')}" alt="${escapeUiText(service.title||'Dịch vụ')}"><div><h3>${escapeUiText(service.title||'Dịch vụ')}</h3><p>${escapeUiText(service.description||service.summary||'')}</p></div><div class="meta"><span>${escapeUiText(service.duration||'')}</span><span>${escapeUiText(service.price||'')}</span></div></div><ol class="staff-process">${steps.map(step=>`<li><div><strong>${escapeUiText(step.title||'Bước phục vụ')}</strong><span>${escapeUiText(step.text||'')}</span></div></li>`).join('')||'<li><div><strong>Quy trình đang cập nhật</strong><span>Chủ tiệm chưa thiết lập các bước chi tiết cho dịch vụ này.</span></div></li>'}</ol></article>`;
  }).join(''):'<div class="staff-empty"><strong>Chưa có dịch vụ đang mở</strong><span>Khi Quản lý bật dịch vụ, quy trình tương ứng sẽ xuất hiện tại đây.</span></div>';
}
function renderStaffShiftsV59(){
  const todayKey=dailyLocalDateKey(), todayHours=shopHoursForDate(todayKey);
  const profile=staffProfileForSessionV59();
  if(staffShiftToday) staffShiftToday.innerHTML=`<article class="staff-shift-main"><small>HÔM NAY • ${new Date().toLocaleDateString('vi-VN',{weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'})}</small><strong>${escapeUiText(formatHoursRange(todayHours))}</strong><p>${todayHours.isOverride?'Quản lý đã thay đổi giờ hoạt động riêng cho hôm nay.':'Đang áp dụng giờ mở tiệm mặc định.'}</p></article><article class="staff-shift-note"><small>HỒ SƠ NHÂN VIÊN</small><p><b>${escapeUiText(profile?.fullName||'Nhân viên')}</b></p><p>${profile?.officialStartDate?`Ngày làm việc chính thức: ${escapeUiText(profile.officialStartDate)}`:'Chưa cập nhật ngày làm việc chính thức.'}</p><p>Hiện tại hệ thống hiển thị giờ vận hành chung của tiệm. Ca cá nhân/ngày nghỉ riêng sẽ được liên kết khi Quản lý cấu hình dữ liệu ca cụ thể.</p></article>`;
  if(staffShiftWeek){
    const base=new Date(); base.setHours(12,0,0,0);
    staffShiftWeek.innerHTML=Array.from({length:7},(_,i)=>{const d=new Date(base);d.setDate(base.getDate()+i);const key=dailyLocalDateKey(d),hours=shopHoursForDate(key);return `<article class="staff-shift-day ${i===0?'is-today':''}"><strong>${d.toLocaleDateString('vi-VN',{weekday:'short',day:'2-digit',month:'2-digit'})}</strong><span>${escapeUiText(hours.open)}–${escapeUiText(hours.close)}</span><small>${hours.isOverride?'Giờ ngoại lệ':'Mặc định'}</small></article>`;}).join('');
  }
}
function renderStaffRatingsV59(){
  const profile=staffProfileForSessionV59(); if(!profile)return;
  const assigned=staffAppointmentsV59(profile).filter(item=>item.completed);
  const rated=assigned.filter(item=>item.ratingFinalized&&Number(item.rating)>=1&&Number(item.rating)<=5);
  const distribution=[1,2,3,4,5].reduce((acc,n)=>(acc[n]=rated.filter(item=>Number(item.rating)===n).length,acc),{});
  const avg=rated.length?rated.reduce((sum,item)=>sum+Number(item.rating||0),0)/rated.length:0;
  const currentQuarter=quarterNumberFromDate(new Date());
  const quarterRated=rated.filter(item=>{const d=new Date(item.startAt||0);return !Number.isNaN(d.getTime())&&d.getFullYear()===new Date().getFullYear()&&quarterNumberFromDate(d)===currentQuarter;});
  if(staffRatingSummary) staffRatingSummary.innerHTML=`<article class="staff-rating-card"><small>ĐIỂM TRUNG BÌNH</small><strong>${avg?avg.toFixed(2):'—'} <span class="stars">★</span></strong></article><article class="staff-rating-card"><small>LƯỢT ĐÃ PV</small><strong>${assigned.length}</strong></article><article class="staff-rating-card"><small>ĐÁNH GIÁ</small><strong>${rated.length}</strong></article><article class="staff-rating-card"><small>QUÝ ${quarterRoman(currentQuarter)}</small><strong>${quarterRated.length}</strong></article>`;
  if(staffRatingDistribution){const max=Math.max(1,...Object.values(distribution));staffRatingDistribution.innerHTML=[5,4,3,2,1].map(n=>`<div class="staff-rating-bar-row"><b>${n} sao</b><div class="staff-rating-track"><span style="width:${Math.round((distribution[n]/max)*100)}%"></span></div><em>${distribution[n]}</em></div>`).join('');}
  const feedback=assigned.filter(item=>String(item.serviceFeedback||'').trim()).sort((a,b)=>new Date(b.serviceFeedbackAt||b.startAt||0)-new Date(a.serviceFeedbackAt||a.startAt||0));
  if(staffFeedbackList) staffFeedbackList.innerHTML=feedback.length?feedback.map(item=>{const sentiment=feedbackSentimentMeta(item);return `<article class="staff-feedback-item ${sentiment.label==='negative'?'is-negative':''}"><div class="top"><strong>${escapeUiText(item.serviceName||'Dịch vụ')} • ${escapeUiText(item.customerName||'Khách hàng')}</strong><span class="score">${item.ratingFinalized&&item.rating?`${item.rating} ★`:'Chưa chấm sao'}</span></div><p>${escapeUiText(item.serviceFeedback||'')}</p><small>${escapeUiText(item.displayDate||staffReadableDateV59(item))}${sentiment.label==='negative'?' • Nội dung cần bạn lưu ý để cải thiện':' • Phản hồi của khách'}</small></article>`;}).join(''):'<div class="staff-empty"><strong>Chưa có phản hồi bằng chữ</strong><span>Khi khách phản hồi về lịch do bạn phục vụ, nội dung sẽ xuất hiện ở đây.</span></div>';
}
function staffAccountForProfileV59(profile){
  if(!profile)return null;
  const all=Object.values(accounts()).filter(acc=>acc?.role==='Nhân viên');
  const phone=normalizePhone(profile.phone||'');
  return all.find(acc=>phone&&normalizePhone(acc.phone||'')===phone)||all.find(acc=>normalizePersonText(acc.name||'')===normalizePersonText(profile.fullName||profile.name||''))||null;
}
function createStaffAssignmentNotificationV59(appointment,staff,mode='assigned'){
  if(!appointment||!staff)return;
  const account=staffAccountForProfileV59(staff); if(!account?.phone)return;
  const phone=normalizePhone(account.phone);
  const id=`staff-assignment-${appointment.id}-${staff.id}-${mode}-${Date.now()}`;
  const title=mode==='cancelled'?`Khách đã hủy lịch ${appointment.serviceName||'dịch vụ'}`:(mode==='removed'?`Lịch ${appointment.serviceName||'dịch vụ'} đã được chuyển khỏi bạn`:`Bạn có lịch mới được phân công`);
  const message=mode==='cancelled'?`${appointment.customerName||'Khách hàng'} • ${appointment.displayDate||''} ${appointment.displayTime||''}`:(mode==='removed'?`${appointment.customerName||'Khách hàng'} • ${appointment.displayDate||''} ${appointment.displayTime||''}`:`${appointment.customerName||'Khách hàng'} • ${appointment.serviceName||'Dịch vụ'} • ${appointment.displayTime||''}`);
  const content=mode==='cancelled'?`Khách ${appointment.customerName||''} đã hủy lịch ${appointment.serviceName||''} vào ${appointment.displayDate||''} lúc ${appointment.displayTime||''}. Lịch này không còn trong danh sách công việc của bạn.`:(mode==='removed'?`Lịch của ${appointment.customerName||'khách hàng'} vào ${appointment.displayDate||''} lúc ${appointment.displayTime||''} đã được Quản lý chuyển sang nhân viên khác.`:`Quản lý vừa phân công bạn phục vụ lịch:\n\nKhách: ${appointment.customerName||''}\nDịch vụ: ${appointment.serviceName||''}\nNgày: ${appointment.displayDate||''}\nGiờ: ${appointment.displayTime||''}–${appointment.displayEndTime||''}${appointment.tableNumber?`\nBàn: BÀN ${appointment.tableNumber}`:''}${appointment.note?`\nGhi chú: ${appointment.note}`:''}`);
  const data=notificationStore(); data.unshift({id,recipientPhone:phone,recipientRole:'Nhân viên',type:'staff-work',title,message,content,createdAt:new Date().toISOString(),read:false,appointmentId:appointment.id,staffId:staff.id}); saveNotificationStore(data);
}
function createManagerStaffServiceDoneNotificationV59(item,profile){
  const managers=Object.values(accounts()).filter(acc=>acc?.role==='Quản lý'&&acc.phone);
  if(!managers.length)return;
  const data=notificationStore(); const now=new Date().toISOString();
  managers.forEach((acc,index)=>data.unshift({id:`staff-service-done-${item.id}-${Date.now()}-${index}`,recipientPhone:normalizePhone(acc.phone),recipientRole:'Quản lý',type:'staff-work',title:`${staffShortNameFromRecord(profile)||profile.fullName||'Nhân viên'} đã xong phần phục vụ`,message:`${item.customerName||'Khách hàng'} • ${item.serviceName||'Dịch vụ'} • ${item.displayTime||''}`,content:`Nhân viên ${profile.fullName||profile.name||''} đã đánh dấu hoàn thành phần phục vụ cho khách ${item.customerName||''}.\n\nLịch vẫn chưa được tính Hoàn thành nghiệp vụ/doanh thu cho tới khi Quản lý tích cột HOÀN THÀNH.`,createdAt:now,read:false,appointmentId:item.id}));
  saveNotificationStore(data);
}
function updateStaffWorkStatusV59(appointmentId,action){
  const session=getSession(),profile=staffProfileForSessionV59(session); if(!profile)return;
  const item=appointmentStore().find(row=>row.id===appointmentId); if(!item||!appointmentBelongsToStaff(item,profile)){showToast('Lịch này không thuộc phân công của bạn.');return;}
  if(!appointmentIsAccepted(item.status)||item.completed){showToast('Lịch hiện không thể thay đổi trạng thái phục vụ.');return;}
  const now=new Date().toISOString();
  let patch={};
  if(action==='start')patch={staffWorkStatus:'in-progress',staffStartedAt:now};
  if(action==='done')patch={staffWorkStatus:'service-done',staffServiceDoneAt:now};
  if(!Object.keys(patch).length)return;
  const updated=saveAppointmentPatch(item.id,patch); if(action==='done'&&updated)createManagerStaffServiceDoneNotificationV59(updated,profile);
  renderStaffWorkspaceV59(currentStaffPanelV59); renderNotifications(); showToast(action==='start'?'Đã bắt đầu phục vụ khách.':'Đã ghi nhận bạn đã hoàn thành phần phục vụ. Quản lý vẫn cần chốt Hoàn thành nghiệp vụ.');
}
function renderStaffNotificationsV59(){
  const session=getSession(); if(!session||session.role!=='Nhân viên')return;
  const items=notificationsForSession(session); const unread=items.filter(item=>!item.read).length;
  if(staffNotificationsSummary) staffNotificationsSummary.innerHTML=`<span class="staff-summary-chip">Chưa xem: <b>${unread}</b></span><span class="staff-summary-chip">Tổng thông báo: <b>${items.length}</b></span>`;
  if(staffNotificationsList) staffNotificationsList.innerHTML=items.length?items.map(item=>`<article class="staff-notification-item ${item.read?'':'unread'}"><span class="icon">${notificationIcon(item.type)}</span><div><strong>${escapeUiText(item.title||'Thông báo')}</strong><p>${escapeUiText(item.message||item.content||'')}</p><small>${notificationTime(item.createdAt)}</small></div><button type="button" data-staff-notification-read="${escapeUiText(item.id)}">${item.read?'Đã xem':'Đánh dấu đã xem'}</button></article>`).join(''):'<div class="staff-empty"><strong>Chưa có thông báo</strong><span>Khi có lịch mới được giao hoặc thay đổi công việc, thông báo sẽ xuất hiện tại đây.</span></div>';
}
function staffPanelCopyV59(panel){
  const map={overview:['Tổng quan công việc','Mở lên là biết hôm nay bạn có khách nào, việc gì đang làm và lịch tiếp theo.'],schedule:['Lịch của tôi','Chỉ các lịch được phân đúng cho tài khoản nhân viên hiện tại.'],services:['Dịch vụ & quy trình','Sổ tay quy trình luôn đồng bộ theo cấu hình dịch vụ của Chủ tiệm.'],shifts:['Ca làm việc','Theo dõi giờ mở tiệm hôm nay và các thay đổi trong 7 ngày tới.'],ratings:['Đánh giá của tôi','Theo dõi chất lượng phục vụ của riêng bạn mà không nhìn dữ liệu của nhân viên khác.'],notifications:['Thông báo','Các thay đổi công việc cần bạn chú ý được tập trung tại một nơi.']};return map[panel]||map.overview;
}
function renderStaffWorkspaceV59(panel=currentStaffPanelV59){
  const session=getSession(); if(!session||session.role!=='Nhân viên')return;
  currentStaffPanelV59=panel;
  const copy=staffPanelCopyV59(panel); if(staffWorkspaceTitle)staffWorkspaceTitle.textContent=copy[0];if(staffWorkspaceLead)staffWorkspaceLead.textContent=copy[1];
  staffPanels.forEach(el=>el.classList.toggle('is-active',el.dataset.staffPanel===panel));
  staffRenderIdentityV59(session);
  if(panel==='overview')renderStaffOverviewV59();
  if(panel==='schedule')renderStaffScheduleV59();
  if(panel==='services')renderStaffServicesV59();
  if(panel==='shifts')renderStaffShiftsV59();
  if(panel==='ratings')renderStaffRatingsV59();
  if(panel==='notifications')renderStaffNotificationsV59();
  normalizeVietnameseTypography(staffWorkspace||document);
}
function openStaffWorkspaceV59(panel='overview',options={}){
  const session=getSession(); if(!session||session.role!=='Nhân viên')return;
  if(staffWorkspace)staffWorkspace.hidden=false;
  document.body.classList.add('staff-workspace-mode');
  closeManagerConfigWorkspace();
  renderStaffWorkspaceV59(panel);
  if(options.scroll!==false)window.scrollTo({top:0,behavior:'smooth'});
}
function closeStaffWorkspaceV59(){
  if(staffWorkspace)staffWorkspace.hidden=true;
  document.body.classList.remove('staff-workspace-mode');
}

if (staffWorkspace) staffWorkspace.addEventListener('click',(event)=>{
  const actionBtn=event.target.closest('[data-staff-work-action]');
  if(actionBtn){ updateStaffWorkStatusV59(actionBtn.dataset.staffAppointment||'',actionBtn.dataset.staffWorkAction||''); return; }
  const notificationBtn=event.target.closest('[data-staff-notification-read]');
  if(notificationBtn){
    const id=notificationBtn.dataset.staffNotificationRead||'';
    const data=notificationStore(); const index=data.findIndex(item=>item.id===id);
    if(index>=0 && !data[index].read){data[index]={...data[index],read:true,readAt:new Date().toISOString()};saveNotificationStore(data);}
    renderStaffNotificationsV59();renderNotifications();
  }
});
managerConfigMenuButtons.forEach(btn => btn.addEventListener('click', () => setManagerConfigPanel(btn.dataset.managerConfigMenu || 'staff')));
[crmCustomerSearch,crmBehaviorFilter,crmTierFilter,crmCareFilter,crmSortFilter].forEach(control=>control?.addEventListener(control===crmCustomerSearch?'input':'change',renderManagerCustomerPanel));
if (crmResetFilters) crmResetFilters.addEventListener('click',()=>{if(crmCustomerSearch)crmCustomerSearch.value='';if(crmBehaviorFilter)crmBehaviorFilter.value='all';if(crmTierFilter)crmTierFilter.value='all';if(crmCareFilter)crmCareFilter.value='all';if(crmSortFilter)crmSortFilter.value='recent';renderManagerCustomerPanel();});
if (crmResetTierCriteria) crmResetTierCriteria.addEventListener('click',()=>{saveCustomerTierCriteriaStore(DEFAULT_CUSTOMER_TIER_CRITERIA.map(x=>({...x})));renderManagerCustomerPanel();showToast('Đã khôi phục tiêu chí phân hạng gợi ý.');});
if (closeCustomerProfile) closeCustomerProfile.addEventListener('click',closeCustomerProfileModal);
if (customerProfileCloseBottom) customerProfileCloseBottom.addEventListener('click',closeCustomerProfileModal);
if (customerProfileBackdrop) customerProfileBackdrop.addEventListener('click',e=>{if(e.target===customerProfileBackdrop)closeCustomerProfileModal();});
if (customerProfileSendPromo) customerProfileSendPromo.addEventListener('click',()=>openManagerCommsForCustomer(customerProfilePhone));
if (addStaffRowBtn) addStaffRowBtn.addEventListener('click', addStaffRow);
if (closeStaffDelete) closeStaffDelete.addEventListener('click', closeStaffDeleteConfirm);
if (cancelStaffDelete) cancelStaffDelete.addEventListener('click', closeStaffDeleteConfirm);
if (confirmStaffDelete) confirmStaffDelete.addEventListener('click', () => { if (pendingStaffDeleteId) deleteStaffCascade(pendingStaffDeleteId); });
if (staffDeleteBackdrop) staffDeleteBackdrop.addEventListener('click', e => { if (e.target === staffDeleteBackdrop) closeStaffDeleteConfirm(); });
if (staffApplicationLibraryBtn) staffApplicationLibraryBtn.addEventListener('click', openStaffApplicationLibrary);
if (closeStaffApplicationLibrary) closeStaffApplicationLibrary.addEventListener('click', closeStaffApplicationLibraryModal);
if (staffApplicationBackdrop) staffApplicationBackdrop.addEventListener('click', e => { if (e.target === staffApplicationBackdrop) closeStaffApplicationLibraryModal(); });
if (staffApplicationUploadForm) staffApplicationUploadForm.addEventListener('submit', uploadStaffApplication);
if (addRatingCriterionBtn) addRatingCriterionBtn.addEventListener('click', addRatingCriterion);
if (closeStaffApplicationPreview) closeStaffApplicationPreview.addEventListener('click', closeStaffApplicationPreviewModal);
if (staffApplicationPreviewCloseBottom) staffApplicationPreviewCloseBottom.addEventListener('click', closeStaffApplicationPreviewModal);
if (staffApplicationPreviewBackdrop) staffApplicationPreviewBackdrop.addEventListener('click', e => { if (e.target === staffApplicationPreviewBackdrop) closeStaffApplicationPreviewModal(); });



// =========================
// VISION 51 — DAILY HERO VISUAL + GIỜ MỞ TIỆM
// =========================
const HERO_VISUAL_KEY = 'beauty_hero_visual_v51';
const WORK_HOURS_KEY = 'beauty_work_hours_v51';
const HERO_AUTO_IMAGES = [
  {src:'assets/nail-real-hero.png', alt:'Bộ móng thanh lịch tại Beauty Moment', chipA:'♥ Nail Care', chipB:'✦ Beauty • Relax'},
  {src:'assets/service-nail-care.png', alt:'Chăm sóc móng tại tiệm', chipA:'💅 Nail Moment', chipB:'♡ Self Care'},
  {src:'assets/service-goi-duong-sinh.png', alt:'Gội đầu dưỡng sinh thư giãn', chipA:'✦ Relax Time', chipB:'♡ Dưỡng sinh'},
  {src:'assets/service-beauty-relax.png', alt:'Không gian làm đẹp và thư giãn', chipA:'✦ Beauty Day', chipB:'♡ Relax'}
];
const HERO_FRAME_CLASSES = ['frame-soft','frame-arch','frame-editorial','frame-glass','frame-petal'];
function heroVisualSettings(){
  try{
    const raw=JSON.parse(localStorage.getItem(HERO_VISUAL_KEY)||'null');
    if(raw && typeof raw==='object') return {auto:raw.auto!==false, customImage:raw.customImage||'', updatedAt:raw.updatedAt||''};
  }catch{}
  return {auto:true,customImage:'',updatedAt:''};
}
function saveHeroVisualSettings(next){
  const value={...heroVisualSettings(),...next,updatedAt:new Date().toISOString()};
  localStorage.setItem(HERO_VISUAL_KEY,JSON.stringify(value));
  renderDailyHeroVisual();
  renderManagerHeroTools();
}
function optimizeHeroImageFile(file){
  return new Promise((resolve,reject)=>{
    if(!file || !file.type?.startsWith('image/')) return reject(new Error('invalid-image'));
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error('read-error'));
    reader.onload=()=>{
      const img=new Image();
      img.onerror=()=>reject(new Error('image-error'));
      img.onload=()=>{
        const maxSide=1600, scale=Math.min(1,maxSide/Math.max(img.naturalWidth||1,img.naturalHeight||1));
        const width=Math.max(1,Math.round(img.naturalWidth*scale)), height=Math.max(1,Math.round(img.naturalHeight*scale));
        const canvas=document.createElement('canvas'); canvas.width=width; canvas.height=height;
        const ctx=canvas.getContext('2d'); ctx.drawImage(img,0,0,width,height);
        resolve(canvas.toDataURL('image/jpeg',.84));
      };
      img.src=String(reader.result||'');
    };
    reader.readAsDataURL(file);
  });
}
function workHoursStore(){
  try{
    const raw=JSON.parse(localStorage.getItem(WORK_HOURS_KEY)||'null');
    if(raw && typeof raw==='object') return {
      defaultOpen:raw.defaultOpen||'08:00',
      defaultClose:raw.defaultClose||'21:00',
      overrides:raw.overrides && typeof raw.overrides==='object' ? raw.overrides : {}
    };
  }catch{}
  return {defaultOpen:'08:00',defaultClose:'21:00',overrides:{}};
}
function saveWorkHoursStore(store){ localStorage.setItem(WORK_HOURS_KEY,JSON.stringify(store)); renderDailyHeroVisual(); }
function shopHoursForDate(dateKey=localDateISO()){
  const store=workHoursStore();
  const override=store.overrides?.[dateKey];
  return {
    date:dateKey,
    open:override?.open||store.defaultOpen||'08:00',
    close:override?.close||store.defaultClose||'21:00',
    isOverride:Boolean(override)
  };
}
function formatHoursRange(hours){ return `${hours.open} – ${hours.close}`; }
function normalizeVietnameseTypography(root=document){
  try{
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[]; let node;
    while((node=walker.nextNode())) nodes.push(node);
    nodes.forEach(textNode=>{
      const parent=textNode.parentElement;
      if(!parent || ['SCRIPT','STYLE','TEXTAREA','INPUT'].includes(parent.tagName)) return;
      const normalized=String(textNode.nodeValue||'').normalize('NFC').replace(/\u00a0/g,' ');
      if(normalized!==textNode.nodeValue) textNode.nodeValue=normalized;
    });
  }catch{}
}
function dailyHeroVisualChoice(){
  const dayKey=dailyLocalDateKey();
  const index=stableTextHash(`${dayKey}|visual`) % HERO_AUTO_IMAGES.length;
  const frameIndex=stableTextHash(`${dayKey}|frame`) % HERO_FRAME_CLASSES.length;
  return {image:HERO_AUTO_IMAGES[index], frame:HERO_FRAME_CLASSES[frameIndex]};
}
function renderDailyHeroVisual(){
  const visual=$('dailyHeroVisual'), image=$('dailyHeroImage');
  if(!visual || !image) return;
  const settings=heroVisualSettings();
  const choice=dailyHeroVisualChoice();
  const activeImage=(!settings.auto && settings.customImage) ? {src:settings.customImage,alt:'Ảnh thật của tiệm do Quản lý cập nhật',chipA:'♡ Ảnh thật của tiệm',chipB:'✦ Beauty Moment'} : choice.image;
  image.src=activeImage.src;
  image.alt=activeImage.alt;
  if($('heroChipA')) $('heroChipA').textContent=activeImage.chipA||'♥ Nail Care';
  if($('heroChipB')) $('heroChipB').textContent=activeImage.chipB||'✦ Beauty • Relax';
  HERO_FRAME_CLASSES.forEach(cls=>visual.classList.remove(cls));
  visual.classList.add(settings.auto ? choice.frame : 'frame-custom');
  visual.dataset.visualMode=settings.auto?'auto':'manual';
  const todayHours=shopHoursForDate(localDateISO());
  if($('heroOpenHoursLabel')) $('heroOpenHoursLabel').textContent='Giờ mở tiệm hôm nay';
  if($('heroOpenHoursText')) $('heroOpenHoursText').textContent=formatHoursRange(todayHours);
  image.classList.remove('daily-image-refresh'); void image.offsetWidth; image.classList.add('daily-image-refresh');
}
function renderManagerHeroTools(){
  const session=getSession();
  const tools=$('managerHeroTools');
  if(!tools) return;
  const isManager=session?.role==='Quản lý';
  tools.hidden=!isManager;
  if(!isManager) return;
  const settings=heroVisualSettings();
  $('heroAutoOnBtn')?.classList.toggle('is-active',settings.auto);
  $('heroAutoOffBtn')?.classList.toggle('is-active',!settings.auto);
  const dateInput=$('managerHoursDate');
  if(dateInput && !dateInput.value) dateInput.value=localDateISO();
  renderManagerHoursEditor(dateInput?.value||localDateISO());
}
function renderManagerHoursEditor(dateKey){
  const date=dateKey||localDateISO();
  const hours=shopHoursForDate(date);
  if($('managerHoursDate')) $('managerHoursDate').value=date;
  if($('managerHoursOpen')) $('managerHoursOpen').value=hours.open;
  if($('managerHoursClose')) $('managerHoursClose').value=hours.close;
  if($('managerHoursHint')) $('managerHoursHint').textContent=hours.isOverride
    ? `Ngày ${new Date(`${date}T00:00:00`).toLocaleDateString('vi-VN')} đang dùng giờ riêng ${formatHoursRange(hours)}.`
    : `Ngày này đang dùng giờ mặc định ${formatHoursRange(hours)}.`;
}
function saveManagerHoursOverride(){
  const date=$('managerHoursDate')?.value||'';
  const open=$('managerHoursOpen')?.value||'';
  const close=$('managerHoursClose')?.value||'';
  if(!date || !open || !close){ showToast('Vui lòng chọn ngày, giờ mở và giờ đóng.'); return; }
  if(minutesFromTime(close)<=minutesFromTime(open)){ showToast('Giờ đóng cửa phải sau giờ mở cửa.'); return; }
  const store=workHoursStore();
  store.overrides={...(store.overrides||{}),[date]:{open,close,updatedAt:new Date().toISOString()}};
  saveWorkHoursStore(store);
  renderManagerHoursEditor(date);
  refreshBookingTimeOptions(true);
  showToast(`Đã cập nhật giờ mở tiệm ngày ${new Date(`${date}T00:00:00`).toLocaleDateString('vi-VN')}: ${open}–${close}.`);
}
function removeManagerHoursOverride(){
  const date=$('managerHoursDate')?.value||localDateISO();
  const store=workHoursStore();
  if(store.overrides?.[date]) delete store.overrides[date];
  saveWorkHoursStore(store);
  renderManagerHoursEditor(date);
  refreshBookingTimeOptions(true);
  showToast('Ngày này đã quay về giờ mở tiệm mặc định 08:00–21:00.');
}
function validateBookingWithinShopHours(date,time,durationMinutes){
  const hours=shopHoursForDate(date);
  const start=minutesFromTime(time), end=start+Number(durationMinutes||0);
  return {valid:start>=minutesFromTime(hours.open)&&end<=minutesFromTime(hours.close),hours,start,end};
}

const DAILY_HERO_CONTENT = {
  guest: [
    { eyebrow:'BEAUTY • CARE • MOMENT', primary:'Chọn thời gian của bạn,', accent:'tận hưởng vẻ đẹp theo cách riêng.', lead:'Xem lịch trống, chọn dịch vụ phù hợp và chủ động đặt hẹn chỉ trong vài phút.' },
    { eyebrow:'MỘT NGÀY DÀNH CHO BẠN', primary:'Một lịch hẹn nhẹ nhàng,', accent:'một phiên bản rạng rỡ hơn.', lead:'Đặt lịch trước để đến tiệm đúng giờ, thư giãn trọn vẹn và không phải chờ đợi lâu.' },
    { eyebrow:'BEAUTY • RELAX • YOUR TIME', primary:'Đẹp hơn mỗi ngày,', accent:'bắt đầu từ một khoảng thời gian cho mình.', lead:'Khám phá dịch vụ, xem khung giờ phù hợp và lựa chọn trải nghiệm bạn đang cần.' },
    { eyebrow:'HÔM NAY BẠN MUỐN ĐẸP THEO CÁCH NÀO?', primary:'Chủ động lịch hẹn,', accent:'nhẹ nhàng tận hưởng từng phút.', lead:'Tiệm giúp bạn nhìn trước lịch trống để việc làm đẹp trở nên thuận tiện và thoải mái hơn.' },
    { eyebrow:'BEAUTY MOMENT', primary:'Dành một chút thời gian,', accent:'tôn vinh nét đẹp riêng của bạn.', lead:'Chọn dịch vụ bạn yêu thích, đặt giờ phù hợp và để phần còn lại tiệm chăm sóc.' }
  ],
  customer: [
    { eyebrow:'HÔM NAY LÀ NGÀY CỦA BẠN', primary:'Chọn giờ bạn thích,', accent:'dành trọn thời gian cho chính mình.', lead:'Lịch trống và các dịch vụ đang sẵn sàng để bạn chủ động lên kế hoạch làm đẹp hôm nay.' },
    { eyebrow:'BEAUTY MOMENT • DÀNH RIÊNG CHO BẠN', primary:'Một cuộc hẹn nhỏ,', accent:'một cảm giác thật xinh.', lead:'Xem lịch, chọn dịch vụ và quay lại theo dõi xác nhận của tiệm ngay trong tài khoản của bạn.' },
    { eyebrow:'ĐẸP THEO NHỊP CỦA BẠN', primary:'Không cần chờ đợi,', accent:'chỉ cần chọn đúng khoảnh khắc.', lead:'Chủ động đặt lịch trước để trải nghiệm tại tiệm nhẹ nhàng hơn từ lúc đến cho tới khi hoàn thành.' },
    { eyebrow:'SELF CARE • SELF LOVE', primary:'Hôm nay hãy chiều mình một chút,', accent:'vì bạn xứng đáng.', lead:'Một khung giờ phù hợp và dịch vụ yêu thích đang chờ bạn lựa chọn.' },
    { eyebrow:'BEAUTY • CARE • MOMENT', primary:'Lịch hẹn rõ ràng,', accent:'trải nghiệm làm đẹp nhẹ nhàng hơn.', lead:'Theo dõi lịch của bạn, ưu đãi mới và mọi cập nhật từ tiệm tại cùng một nơi.' }
  ],
  manager: [
    { eyebrow:'TỔNG QUAN VẬN HÀNH HÔM NAY', primary:'Nắm lịch trong tay,', accent:'vận hành tiệm nhẹ nhàng hơn.', lead:'Theo dõi lịch khách, dịch vụ, nhân viên và các thông báo quan trọng từ một giao diện thống nhất.' },
    { eyebrow:'BEAUTY MOMENT • QUẢN LÝ', primary:'Rõ lịch, rõ việc,', accent:'rõ nhịp vận hành mỗi ngày.', lead:'Ưu tiên những việc cần xử lý trước để khách được phục vụ đúng giờ và đội ngũ phối hợp hiệu quả.' },
    { eyebrow:'MỖI NGÀY MỘT GÓC NHÌN MỚI', primary:'Theo dõi thông minh,', accent:'chăm khách chu đáo hơn.', lead:'Dữ liệu lịch hẹn và vận hành được liên kết để bạn ra quyết định nhanh hơn trong ngày.' },
    { eyebrow:'VẬN HÀNH • KHÁCH HÀNG • ĐỘI NGŨ', primary:'Một nơi quản lý,', accent:'nhiều luồng công việc cùng kết nối.', lead:'Từ lịch khách đến nhân viên và tài chính, các dữ liệu quan trọng luôn đi theo cùng một logic.' },
    { eyebrow:'CHỦ TIỆM • HÔM NAY', primary:'Chủ động từng lịch hẹn,', accent:'giữ trải nghiệm khách luôn chỉn chu.', lead:'Xem nhanh những gì đang diễn ra tại tiệm và xử lý đúng việc vào đúng thời điểm.' }
  ],
  staff: [
    { eyebrow:'NHÂN VIÊN • BEAUTY MOMENT', primary:'Rõ lịch làm việc,', accent:'tập trung phục vụ thật tốt.', lead:'Theo dõi công việc của bạn để mỗi khách đều được đón tiếp đúng giờ và chăm sóc chỉn chu.' },
    { eyebrow:'MỖI KHÁCH LÀ MỘT TRẢI NGHIỆM', primary:'Chăm từng cuộc hẹn,', accent:'tạo dấu ấn bằng tay nghề.', lead:'Một lịch làm việc rõ ràng giúp bạn dành nhiều sự tập trung hơn cho chất lượng phục vụ.' },
    { eyebrow:'HÔM NAY CÙNG LÀM THẬT TỐT', primary:'Đúng giờ, đúng dịch vụ,', accent:'đúng trải nghiệm khách mong đợi.', lead:'Theo dõi lịch và công việc để phối hợp cùng tiệm nhẹ nhàng, chuyên nghiệp hơn.' },
    { eyebrow:'CARE • SKILL • MOMENT', primary:'Mỗi ngày một chút tốt hơn,', accent:'mỗi khách một chút hài lòng hơn.', lead:'Tập trung vào tay nghề, thái độ phục vụ và những cuộc hẹn đang cần bạn hôm nay.' },
    { eyebrow:'ĐỘI NGŨ BEAUTY MOMENT', primary:'Làm việc chủ động,', accent:'phục vụ bằng sự tận tâm.', lead:'Lịch hẹn rõ ràng giúp bạn chuẩn bị tốt hơn và mang đến trải nghiệm đồng đều cho khách.' }
  ]
};
function dailyHeroRoleKey(session=getSession()) {
  if (session?.role === 'Quản lý') return 'manager';
  if (session?.role === 'Nhân viên') return 'staff';
  if (session?.role === 'Khách hàng') return 'customer';
  return 'guest';
}
function dailyLocalDateKey(date=new Date()) {
  const yyyy=date.getFullYear();
  const mm=String(date.getMonth()+1).padStart(2,'0');
  const dd=String(date.getDate()).padStart(2,'0');
  return `${yyyy}-${mm}-${dd}`;
}
function stableTextHash(value='') {
  let hash=2166136261;
  for (let i=0;i<value.length;i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash,16777619);
  }
  return hash >>> 0;
}
function renderDailyHero(session=getSession()) {
  const roleKey=dailyHeroRoleKey(session);
  const pool=DAILY_HERO_CONTENT[roleKey] || DAILY_HERO_CONTENT.guest;
  const dayKey=dailyLocalDateKey();
  const index=stableTextHash(`${dayKey}|${roleKey}`) % pool.length;
  const content=pool[index];
  const eyebrow=$('dailyHeroEyebrow');
  const primary=$('dailyHeroPrimary');
  const accent=$('dailyHeroAccent');
  const lead=$('dailyHeroLead');
  const copy=$('dailyHeroCopy');
  if (eyebrow) eyebrow.textContent=content.eyebrow;
  if (primary) primary.textContent=content.primary;
  if (accent) accent.textContent=content.accent;
  if (lead) lead.textContent=content.lead;
  if (copy) {
    copy.dataset.dailyHeroDate=dayKey;
    copy.dataset.dailyHeroRole=roleKey;
    copy.classList.remove('daily-hero-refresh');
    void copy.offsetWidth;
    copy.classList.add('daily-hero-refresh');
  }
  renderDailyHeroVisual();
  normalizeVietnameseTypography(document);
}

function renderSessionHeader() {
  const session = getSession();
  renderRoleNavigation(session);
  renderDailyHero(session);
  renderManagerHeroTools();
  const loggedIn = !!(session && session.name && session.phone && session.role);
  if (session?.role !== 'Quản lý') closeManagerConfigWorkspace();
  if (session?.role !== 'Nhân viên') closeStaffWorkspaceV59();
  else openStaffWorkspaceV59(currentStaffPanelV59 || 'overview',{scroll:false});
  if (managerPromotionHistoryBtn) managerPromotionHistoryBtn.hidden = session?.role !== 'Quản lý';
  if (managerAddServiceCard) managerAddServiceCard.hidden = session?.role !== 'Quản lý';
  if (managerQuickBookingBtn) managerQuickBookingBtn.hidden = session?.role !== 'Quản lý';
  if (heroBookBtn) heroBookBtn.innerHTML = session?.role === 'Quản lý' ? 'Đăng ký lịch <span>→</span>' : (session?.role === 'Nhân viên' ? 'Xem lịch của tôi <span>→</span>' : 'Đặt lịch ngay <span>→</span>');
  guestButtonContent.hidden = loggedIn;
  profileButtonContent.hidden = !loggedIn;
  loginMenuBtn.classList.toggle('is-profile', loggedIn);
  loginMenuBtn.setAttribute('aria-label', loggedIn ? `Tài khoản ${session.name}` : 'Đăng nhập hoặc mở tài khoản');
  if (loggedIn) {
    profileName.textContent = session.name;
    profilePhone.textContent = session.phone;
    profileMenuName.textContent = session.name;
    profileMenuRole.textContent = session.role;
    profileMenuPhone.textContent = session.phone;
  }
  loginMenu.classList.remove('open');
  profileMenu.classList.remove('open');
  loginMenu.setAttribute('aria-hidden','true');
  profileMenu.setAttribute('aria-hidden','true');
  loginMenuBtn.setAttribute('aria-expanded','false');
  renderNotifications();
  // Vision 38: vai trò vừa đăng nhập phải lập tức đổi giao diện dịch vụ.
  renderServiceCatalogEverywhere();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 3600);
}
function sendMockOtp(kind, phone) {
  const code = String(Math.floor(100000 + Math.random() * 900000));
  showToast(`MÔ PHỎNG SMS tới ${phone}: mã xác thực ${code}`);
  return code;
}

function showView(view) {
  views.forEach(v => v.classList.remove('active'));
  view.classList.add('active');
  document.querySelector('.auth-modal').scrollTo({top:0,behavior:'smooth'});
}
function registrationRoleCopy(role=currentRole) {
  if (role === 'Quản lý') return {
    registerTitle: 'Đăng ký tài khoản Quản lý',
    registerSubtitle: 'Tạo tài khoản quản lý và xác thực số điện thoại trước khi sử dụng.',
    infoTitle: 'Đăng ký Quản lý lần đầu',
    infoText: 'Nhập thông tin, nhận mã OTP 6 số về số điện thoại và xác thực để tạo tài khoản Quản lý.',
    otpText: 'Đang xác thực tài khoản Quản lý'
  };
  if (role === 'Nhân viên') return {
    registerTitle: 'Đăng ký tài khoản Nhân viên',
    registerSubtitle: 'Tạo tài khoản nhân viên và xác thực số điện thoại trước khi sử dụng.',
    infoTitle: 'Đăng ký Nhân viên lần đầu',
    infoText: 'Nhập thông tin, nhận mã OTP 6 số về số điện thoại và xác thực để tạo tài khoản Nhân viên.',
    otpText: 'Đang xác thực tài khoản Nhân viên'
  };
  return {
    registerTitle: 'Đăng ký tài khoản Khách hàng',
    registerSubtitle: 'Tạo tài khoản để đặt lịch và quản lý lịch hẹn của bạn.',
    infoTitle: 'Bạn chưa có tài khoản?',
    infoText: 'Đăng ký lần đầu, hệ thống sẽ gửi mã OTP 6 số về số điện thoại để kích hoạt tài khoản.',
    otpText: 'Đang xác thực tài khoản Khách hàng'
  };
}
function updateRegistrationRoleUI() {
  const copy = registrationRoleCopy(currentRole);
  const title = $('registerInfoTitle');
  const text = $('registerInfoText');
  const otpRole = $('registerOtpRoleText');
  if (title) title.textContent = copy.infoTitle;
  if (text) text.textContent = copy.infoText;
  if (otpRole) otpRole.textContent = copy.otpText;
  const isCustomer = currentRole === 'Khách hàng';
  $$('.customer-register-only').forEach(el => el.hidden = !isCustomer);
  if (!isCustomer) {
    if ($('regAddress')) $('regAddress').value = '';
    if ($('regGender')) $('regGender').value = '';
  }
}

function setHeader(mode) {
  if (mode === 'register') {
    const copy = registrationRoleCopy(currentRole);
    authTitle.textContent = copy.registerTitle;
    authSubtitle.textContent = copy.registerSubtitle;
    updateRegistrationRoleUI();
    tabRegister.classList.add('active'); tabLogin.classList.remove('active');
  } else if (mode === 'login') {
    authTitle.textContent = `Đăng nhập ${currentRole}`;
    authSubtitle.textContent = `Chào mừng bạn quay lại. Nhập tài khoản ${currentRole} để tiếp tục.`;
    tabLogin.classList.add('active'); tabRegister.classList.remove('active');
  } else {
    authTitle.textContent = mode === 'forgot' ? 'Khôi phục tài khoản' : 'Xác thực tài khoản';
    authSubtitle.textContent = 'Bảo mật tài khoản bằng mã xác thực qua số điện thoại.';
    tabLogin.classList.remove('active'); tabRegister.classList.remove('active');
  }
}
function goRegister() { setHeader('register'); showView($('registerView')); }
function goLogin() { setHeader('login'); showView($('loginView')); prefillDemoLogin(currentRole); renderDemoCustomerSwitcher(); }
function goForgot() { setHeader('forgot'); $('forgotPhone').value = $('loginPhone').value.trim(); $('forgotMessage').textContent=''; showView($('forgotView')); }

function openAuth(role='Khách hàng') {
  currentRole = role;
  roleLabel.textContent = role;
  updateRegistrationRoleUI();
  $('registerMessage').textContent = '';
  $('loginMessage').textContent = '';
  if (DEMO_LOGIN_ACCOUNTS[role]) goLogin(); else goRegister();
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  if (DEMO_LOGIN_ACCOUNTS[role]) {
    prefillDemoLogin(role);
    setTimeout(() => { prefillDemoLogin(role); $('loginPassword')?.focus(); }, 120);
  } else {
    setTimeout(() => $('regName')?.focus(), 80);
  }
}
function closeModal() {
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function toggleMenu(force) {
  const session = getSession();
  const target = session ? profileMenu : loginMenu;
  const other = session ? loginMenu : profileMenu;
  const open = typeof force === 'boolean' ? force : !target.classList.contains('open');
  if (open) toggleNotificationPanel(false);
  other.classList.remove('open');
  other.setAttribute('aria-hidden','true');
  target.classList.toggle('open',open);
  target.setAttribute('aria-hidden',String(!open));
  loginMenuBtn.setAttribute('aria-expanded',String(open));
}

loginMenuBtn.addEventListener('click',()=>toggleMenu());
notificationBtn.addEventListener('click',(e)=>{ e.stopPropagation(); toggleNotificationPanel(); });
closeNotificationDetail.addEventListener('click', closeNotificationDetailModal);
closeNotificationDetailBottom.addEventListener('click', closeNotificationDetailModal);
notificationDetailBackdrop.addEventListener('click', (e)=>{ if (e.target === notificationDetailBackdrop) closeNotificationDetailModal(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) stopNotificationSpeech(); });
window.addEventListener('beforeunload', stopNotificationSpeech);
closeContact.addEventListener('click', closeContactModal);
if (managerSalonLogoInput) managerSalonLogoInput.addEventListener('change', () => {
  const file = managerSalonLogoInput.files?.[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('Vui lòng chọn đúng file hình ảnh.'); managerSalonLogoInput.value=''; return; }
  const reader = new FileReader();
  reader.onload = () => { if (managerSalonLogoPreview) managerSalonLogoPreview.src = String(reader.result || ''); };
  reader.readAsDataURL(file);
});
if (managerSalonResetBtn) managerSalonResetBtn.addEventListener('click', fillManagerSalonForm);
if (managerSalonForm) managerSalonForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const session = getSession();
  const msg = $('managerSalonMessage');
  if (!session || session.role !== 'Quản lý') { if (msg) msg.textContent = 'Chỉ tài khoản Quản lý mới được cập nhật thông tin tiệm.'; return; }
  const name = $('managerSalonName').value.trim();
  const phone = $('managerSalonPhone').value.trim();
  const address = $('managerSalonAddress').value.trim();
  if (name.length < 2) { if (msg) msg.textContent = 'Vui lòng nhập tên tiệm.'; return; }
  if (!address) { if (msg) msg.textContent = 'Vui lòng nhập địa chỉ tiệm.'; return; }
  if (!phone) { if (msg) msg.textContent = 'Vui lòng nhập số điện thoại liên hệ.'; return; }
  const previous = salonProfile();
  const next = { ...previous, name, phone, address, logo: managerSalonLogoPreview?.src || previous.logo, updatedAt:new Date().toISOString() };
  localStorage.setItem(SALON_PROFILE_KEY, JSON.stringify(next));
  renderSalonProfile();
  fillManagerSalonForm();
  if (msg) { msg.className='form-message success'; msg.textContent='Đã lưu thông tin tiệm và đồng bộ sang giao diện Khách hàng.'; }
  showToast('Đã cập nhật thông tin tiệm.');
});

contactBackdrop.addEventListener('click', (e)=>{ if (e.target === contactBackdrop) closeContactModal(); });
navServiceBtn.addEventListener('click', (e) => {
  const session = getSession();
  if (session?.role === 'Quản lý') {
    e.preventDefault();
    openManagerConfigWorkspace('staff');
  } else if (session?.role === 'Nhân viên') {
    e.preventDefault();
    openStaffWorkspaceV59('schedule');
  }
});
navIntroBtn.addEventListener('click', (e) => {
  const session = getSession();
  if (session?.role === 'Quản lý') {
    if (document.body.classList.contains('manager-config-mode')) {
      e.preventDefault();
      closeManagerConfigWorkspace();
      window.scrollTo({top:0,behavior:'smooth'});
    }
    return;
  }
  if (session?.role === 'Nhân viên') {
    e.preventDefault();
    openStaffWorkspaceV59('overview');
    return;
  }
  e.preventDefault();
  openCustomerIntroduction();
});
navIntroVoiceBtn?.addEventListener('click',(e)=>{ e.preventDefault(); e.stopPropagation(); speakCustomerIntroduction(); });
closeCustomerIntro?.addEventListener('click',closeCustomerIntroductionModal);
customerIntroCloseBottom?.addEventListener('click',closeCustomerIntroductionModal);
customerIntroBackdrop?.addEventListener('click',(e)=>{ if(e.target===customerIntroBackdrop) closeCustomerIntroductionModal(); });
customerIntroListenBtn?.addEventListener('click',speakCustomerIntroduction);
customerIntroBookBtn?.addEventListener('click',()=>{ closeCustomerIntroductionModal(); heroBookBtn?.click(); });
contactNavBtn.addEventListener('click', (e)=>{
  const session=getSession();
  e.preventDefault();
  if(session?.role==='Nhân viên'){ openStaffWorkspaceV59('ratings'); return; }
  closeManagerConfigWorkspace(); openContactModal();
});
myScheduleNavBtn.addEventListener('click', (e)=>{
  const session=getSession();
  e.preventDefault();
  if(session?.role==='Nhân viên'){ openStaffWorkspaceV59('shifts'); return; }
  closeManagerConfigWorkspace(); openMyScheduleModal();
});
navPromoBtn.addEventListener('click', (e)=>{
  const session = getSession();
  if (session?.role === 'Quản lý') {
    e.preventDefault();
    closeManagerConfigWorkspace();
    openManagerCommsModal();
  } else if (session?.role === 'Khách hàng') {
    e.preventDefault();
    openPromotionHistory();
  } else if (session?.role === 'Nhân viên') {
    e.preventDefault();
    openStaffWorkspaceV59('services');
  }
});
if (staffExtraNavBtn) staffExtraNavBtn.addEventListener('click',(e)=>{ e.preventDefault(); openStaffWorkspaceV59('notifications'); });
if (managerPromotionHistoryBtn) managerPromotionHistoryBtn.addEventListener('click', openPromotionHistory);
if (closePromotionHistory) closePromotionHistory.addEventListener('click', closePromotionHistoryModal);
if (promotionHistoryBackdrop) promotionHistoryBackdrop.addEventListener('click', (e)=>{ if (e.target === promotionHistoryBackdrop) closePromotionHistoryModal(); });
closeMySchedule.addEventListener('click', closeMyScheduleModal);
myScheduleBackdrop.addEventListener('click', (e)=>{ if (e.target === myScheduleBackdrop) closeMyScheduleModal(); });
closeManagerSchedule.addEventListener('click', closeManagerScheduleModal);
managerScheduleBackdrop.addEventListener('click', (e)=>{ if (e.target === managerScheduleBackdrop) closeManagerScheduleModal(); });
if (closeServiceDetail) closeServiceDetail.addEventListener('click', closeServiceDetailModal);
if (serviceDetailCloseSecondary) serviceDetailCloseSecondary.addEventListener('click', closeServiceDetailModal);
if (serviceDetailBackdrop) serviceDetailBackdrop.addEventListener('click', (e)=>{ if (e.target === serviceDetailBackdrop) closeServiceDetailModal(); });
bindServiceCards();
if (closeNailGallery) closeNailGallery.addEventListener('click', closeNailGalleryModal);
if (closeNailGalleryBottom) closeNailGalleryBottom.addEventListener('click', closeNailGalleryModal);
if (nailGalleryBackdrop) nailGalleryBackdrop.addEventListener('click', (e) => { if (e.target === nailGalleryBackdrop) closeNailGalleryModal(); });
if (managerNailAddBtn) managerNailAddBtn.addEventListener('click', addManagerNailSample);
if (serviceDetailBookBtn) serviceDetailBookBtn.addEventListener('click', () => {
  const serviceId = serviceDetailBookBtn.dataset.serviceId || 'nail-care';
  closeServiceDetailModal();
  openBookingModal(serviceId);
});
if (heroBookBtn) heroBookBtn.addEventListener('click', () => openBookingModal());
if ($('heroAutoOnBtn')) $('heroAutoOnBtn').addEventListener('click',()=>saveHeroVisualSettings({auto:true}));
if ($('heroAutoOffBtn')) $('heroAutoOffBtn').addEventListener('click',()=>saveHeroVisualSettings({auto:false}));
if ($('managerHeroResetBtn')) $('managerHeroResetBtn').addEventListener('click',()=>{ saveHeroVisualSettings({auto:true}); showToast('Đã bật lại chế độ tự đổi ảnh mỗi ngày.'); });
if ($('managerHeroImageInput')) $('managerHeroImageInput').addEventListener('change', async ()=>{
  const file=$('managerHeroImageInput').files?.[0];
  if(!file) return;
  try{
    const optimized=await optimizeHeroImageFile(file);
    saveHeroVisualSettings({auto:false,customImage:optimized});
    showToast('Đã dùng ảnh thật của tiệm. Chế độ tự đổi ảnh đã chuyển sang OFF.');
  }catch{ showToast('Không thể đọc ảnh này. Vui lòng chọn file JPG/PNG khác.'); }
  $('managerHeroImageInput').value='';
});
if ($('managerHoursDate')) $('managerHoursDate').addEventListener('change',()=>renderManagerHoursEditor($('managerHoursDate').value||localDateISO()));
if ($('managerHoursSaveBtn')) $('managerHoursSaveBtn').addEventListener('click',saveManagerHoursOverride);
if ($('managerHoursDefaultBtn')) $('managerHoursDefaultBtn').addEventListener('click',removeManagerHoursOverride);
if (bookingModalCloseBtn) bookingModalCloseBtn.addEventListener('click', closeBookingModal);
if (bookingNailPickerBtn) bookingNailPickerBtn.addEventListener('click', () => openNailGallery('booking'));
renderNailGallery();
if (bookingCancelBtn) bookingCancelBtn.addEventListener('click', closeBookingModal);
if (closeStaffSelect) closeStaffSelect.addEventListener('click', closeStaffSelectModal);
if (closeStaffSelectBottom) closeStaffSelectBottom.addEventListener('click', closeStaffSelectModal);
if (staffSelectBackdrop) staffSelectBackdrop.addEventListener('click', (e)=>{ if (e.target === staffSelectBackdrop) closeStaffSelectModal(); });
if (closeServiceFeedback) closeServiceFeedback.addEventListener('click', closeServiceFeedbackModal);
if (closeServiceFeedbackBottom) closeServiceFeedbackBottom.addEventListener('click', closeServiceFeedbackModal);
if (saveServiceFeedbackBtn) saveServiceFeedbackBtn.addEventListener('click', saveServiceFeedback);
if (serviceFeedbackText) serviceFeedbackText.addEventListener('input', ()=>{
  if (serviceFeedbackCount) serviceFeedbackCount.textContent = `${serviceFeedbackText.value.length}/1200 ký tự`;
  if (serviceFeedbackSavedState) serviceFeedbackSavedState.textContent = 'Nội dung chưa lưu';
});
if (serviceFeedbackBackdrop) serviceFeedbackBackdrop.addEventListener('click', (e)=>{ if (e.target === serviceFeedbackBackdrop) closeServiceFeedbackModal(); });
if (bookingBackdrop) bookingBackdrop.addEventListener('click', (e)=>{ if (e.target === bookingBackdrop) closeBookingModal(); });
if (bookingWaitlistBtn) bookingWaitlistBtn.addEventListener('click', openWaitlistModal);
if (closeWaitlist) closeWaitlist.addEventListener('click', closeWaitlistModal);
if (closeWaitlistBottom) closeWaitlistBottom.addEventListener('click', closeWaitlistModal);
if (waitlistBackdrop) waitlistBackdrop.addEventListener('click', (e)=>{ if (e.target === waitlistBackdrop) closeWaitlistModal(); });
if (bookingGuideBtn) bookingGuideBtn.addEventListener('click', openGuideModal);
if (closeGuide) closeGuide.addEventListener('click', closeGuideModal);
if (closeGuideBottom) closeGuideBottom.addEventListener('click', closeGuideModal);
if (guideBackdrop) guideBackdrop.addEventListener('click', (e)=>{ if (e.target === guideBackdrop) closeGuideModal(); });
$('bookingTime')?.addEventListener('change',()=>{ managerBookingImmediateMode=false; updateBookingSummary(); });
$('bookingDate')?.addEventListener('change',()=>{ managerBookingImmediateMode=false; refreshBookingTimeOptions(false); updateBookingSummary(); });
managerQuickBookingBtn?.addEventListener('click',()=>{ closeManagerConfigWorkspace(); openBookingModal(); });
managerScheduleBookBtn?.addEventListener('click',()=>{ closeManagerScheduleModal(); openBookingModal(); });
document.querySelectorAll('[data-manager-booking-mode]').forEach(btn=>btn.addEventListener('click',()=>setManagerBookingMode(btn.dataset.managerBookingMode)));
managerBookingCustomerSearch?.addEventListener('input',()=>renderManagerBookingCustomerOptions(managerBookingCustomerSearch.value));
managerBookingCustomerSelect?.addEventListener('change',()=>{ managerSelectedCustomerPhone=normalizePhone(managerBookingCustomerSelect.value||''); renderManagerBookingSelectedCustomer(); });
managerBookNowBtn?.addEventListener('click',setManagerBookingNow);
refreshBookingServiceCards();
if (closeManagerComms) closeManagerComms.addEventListener('click', closeManagerCommsModal);
if (managerCommsBackdrop) managerCommsBackdrop.addEventListener('click', (e)=>{ if (e.target === managerCommsBackdrop) closeManagerCommsModal(); });
if (managerCommsForm) managerCommsForm.addEventListener('submit', managerSendCustomerMessage);
if (managerAddServiceCard) managerAddServiceCard.addEventListener('click', openManagerServiceModal);
if (closeManagerService) closeManagerService.addEventListener('click', closeManagerServiceModal);
if (managerServiceCancel) managerServiceCancel.addEventListener('click', closeManagerServiceModal);
if (managerServiceBackdrop) managerServiceBackdrop.addEventListener('click', (e)=>{ if (e.target === managerServiceBackdrop) closeManagerServiceModal(); });
if (managerServiceForm) managerServiceForm.addEventListener('submit', handleManagerServiceCreate);
if (managerServiceAddStep) managerServiceAddStep.addEventListener('click', addManagerServiceStep);
[managerServiceDuration, managerServiceBuffer].forEach(control => control?.addEventListener('input', updateManagerServiceTimingPreviewV60));
if (managerServiceName) {
  let managerServiceDraftTimer = null;
  managerServiceName.addEventListener('input', () => {
    if (managerServiceMode !== 'create') return;
    clearTimeout(managerServiceDraftTimer);
    managerServiceDraftTimer = setTimeout(() => autofillManagerServiceDraft(false), 360);
  });
  managerServiceName.addEventListener('blur', () => autofillManagerServiceDraft(false));
}
if (managerServiceDescription) managerServiceDescription.addEventListener('input', () => { managerServiceDraftLock.description = true; delete managerServiceDescription.dataset.aiSource; });
if (managerServiceSummary) managerServiceSummary.addEventListener('input', () => { managerServiceDraftLock.summary = true; delete managerServiceSummary.dataset.aiSource; });
// Vision 38 modal startup safeguard: modal phải đóng tuyệt đối khi trang vừa mở.
if (managerServiceBackdrop) {
  managerServiceBackdrop.classList.remove('open');
  managerServiceBackdrop.setAttribute('aria-hidden','true');
}
if (managerServiceImage) managerServiceImage.addEventListener('change', () => {
  const file = managerServiceImage.files?.[0];
  if (!file || !managerServiceImagePreview) return;
  const reader = new FileReader();
  reader.onload = () => { const next = String(reader.result || 'assets/service-goi-duong-sinh.png'); managerServiceImagePreview.src = next; managerServiceImagePreview.dataset.existingImage = next; };
  reader.readAsDataURL(file);
});
if (managerCommsSelectAll) managerCommsSelectAll.addEventListener('change', () => {
  managerCommsRecipientList?.querySelectorAll('[data-manager-recipient]').forEach(input => { input.checked = managerCommsSelectAll.checked; });
  updateManagerRecipientSummary();
});
if (managerCommsSearch) managerCommsSearch.addEventListener('input', () => renderManagerRecipientList(managerCommsSearch.value));
if (managerCommsSegmentFilter) managerCommsSegmentFilter.addEventListener('change',()=>renderManagerRecipientList(managerCommsSearch?.value||''));
document.querySelectorAll('input[name="managerCommsType"]').forEach(input => input.addEventListener('change', () => {
  renderManagerCommsTypeState();
  invalidateManagerAiDraft({clearBody:true});
}));
managerCommsSubject?.addEventListener('input', () => invalidateManagerAiDraft({clearBody:true}));
managerCommsAiReady?.addEventListener('change', () => {
  if (managerCommsAiReady.checked) generateManagerAiDraft();
  else invalidateManagerAiDraft({clearBody:true});
});
managerCommsAiApprove?.addEventListener('click', () => {
  if (!managerCommsBody?.value.trim()) return;
  setManagerAiState({approved:true, generated:true, message:'✓ Nội dung đã được bạn đồng ý — có thể gửi tới khách'});
  updateManagerCommsPreview();
});
managerCommsAiRevise?.addEventListener('click', () => {
  if (!managerCommsAiReady?.checked) managerCommsAiReady.checked = true;
  generateManagerAiDraft({revise:true});
});
managerCommsBody?.addEventListener('input', () => {
  if (managerCommsBody.value !== managerAiLastGenerated) {
    managerAiLastGenerated = managerCommsBody.value;
    setManagerAiState({approved:false, generated:!!managerCommsBody.value.trim(), message:'Nội dung đã được chỉnh sửa — vui lòng bấm Đồng ý lại'});
  }
  updateManagerCommsPreview();
});
notificationUnreadTab?.addEventListener('click', (e)=>{ e.stopPropagation(); setNotificationTab('unread'); });
notificationReadTab?.addEventListener('click', (e)=>{ e.stopPropagation(); setNotificationTab('read'); });
markAllReadBtn.addEventListener('click',(e)=>{
  e.stopPropagation();
  const session = getSession();
  if (!session || !notificationEnabledForRole(session.role)) return;
  const data = notificationStore();
  data.forEach(item => { if (notificationBelongsToSession(item, session)) item.read = true; });
  saveNotificationStore(data);
  renderNotifications();
});
document.addEventListener('click',(e)=>{
  if(!e.target.closest('.login-wrap')) toggleMenu(false);
  if(!e.target.closest('.notification-wrap')) toggleNotificationPanel(false);
});
$$('[data-role]').forEach(btn=>btn.addEventListener('click',()=>{ toggleMenu(false); openAuth(btn.dataset.role); }));
$$('[data-demo-customer]').forEach(btn => btn.addEventListener('click', () => {
  prefillDemoLogin('Khách hàng', btn.dataset.demoCustomer || '');
  renderDemoCustomerSwitcher();
  $('loginPassword')?.focus();
}));
$$('[data-open-role]').forEach(btn=>btn.addEventListener('click',()=>openAuth(btn.dataset.openRole)));
closeAuth.addEventListener('click',closeModal);
backdrop.addEventListener('click',(e)=>{ if(e.target===backdrop) closeModal(); });
document.addEventListener('keydown',(e)=>{
  if(e.key!=='Escape') return;
  if (notificationDetailBackdrop.classList.contains('open')) closeNotificationDetailModal();
  else if (promotionHistoryBackdrop?.classList.contains('open')) closePromotionHistoryModal();
  else if (managerCommsBackdrop?.classList.contains('open')) closeManagerCommsModal();
  else if (staffDeleteBackdrop && staffDeleteBackdrop.classList.contains('open')) closeStaffDeleteConfirm();
  else if (staffApplicationPreviewBackdrop && staffApplicationPreviewBackdrop.classList.contains('open')) closeStaffApplicationPreviewModal();
  else if (customerProfileBackdrop && customerProfileBackdrop.classList.contains('open')) closeCustomerProfileModal();
  else if (serviceFeedbackBackdrop && serviceFeedbackBackdrop.classList.contains('open')) closeServiceFeedbackModal();
  else if (staffSelectBackdrop && staffSelectBackdrop.classList.contains('open')) closeStaffSelectModal();
  else if (guideBackdrop && guideBackdrop.classList.contains('open')) closeGuideModal();
  else if (waitlistBackdrop && waitlistBackdrop.classList.contains('open')) closeWaitlistModal();
  else if (bookingBackdrop && bookingBackdrop.classList.contains('open')) closeBookingModal();
  else if (nailGalleryBackdrop && nailGalleryBackdrop.classList.contains('open')) closeNailGalleryModal();
  else if (serviceDetailBackdrop && serviceDetailBackdrop.classList.contains('open')) closeServiceDetailModal();
  else if (managerScheduleBackdrop.classList.contains('open')) closeManagerScheduleModal();
  else if (myScheduleBackdrop.classList.contains('open')) closeMyScheduleModal();
  else if (contactBackdrop.classList.contains('open')) closeContactModal();
  else if (backdrop.classList.contains('open')) closeModal();
});

tabRegister.addEventListener('click',goRegister);
tabLogin.addEventListener('click',goLogin);
$$('[data-go-register]').forEach(b=>b.addEventListener('click',goRegister));
$$('[data-go-login]').forEach(b=>b.addEventListener('click',goLogin));
$$('[data-open-forgot]').forEach(b=>b.addEventListener('click',goForgot));
$('forgotBtn').addEventListener('click',goForgot);

profileInfoBtn.addEventListener('click',()=>{
  const session = getSession();
  if (!session) return;
  toggleMenu(false);
  showToast(`${session.role}: ${session.name} • ${session.phone}`);
});
logoutBtn.addEventListener('click',()=>{
  const session = getSession();
  clearSession();
  toggleNotificationPanel(false);
  renderSessionHeader();
  showToast(session ? `Đã đăng xuất tài khoản ${session.name}.` : 'Đã đăng xuất.');
});

ensureDemoAccounts();
ensureCustomerIdentityV52();
customerTierCriteriaStore();
ensureStaffStoreV49();
ensureDemoStaffProfileV59();
ensureStaffRatingCriteriaV42();
archiveClosedQuartersV42(new Date());
loadCustomServicesIntoMemory();
renderServiceCatalogEverywhere();
promotionCampaignStore();
pruneExpiredPromotionNotifications();
// Vision 29: không nạp dữ liệu khách chờ mẫu để người dùng test bằng dữ liệu thực.
migrateAllServiceTableAssignments();
reconcileServiceCareSignalsV55();
reconcileManagerScheduleArchiveV57();
renderSessionHeader();
// Vision 57: nếu app đang mở qua 00:00, tự lưu trữ lịch đã từ chối của ngày cũ.
setInterval(() => {
  const session = getSession();
  if (session?.role === 'Khách hàng' && myScheduleBackdrop?.classList.contains('open') && !serviceFeedbackBackdrop?.classList.contains('open') && !staffSelectBackdrop?.classList.contains('open')) renderMySchedule();
}, 60 * 1000);
setInterval(() => {
  const changed = reconcileManagerScheduleArchiveV57();
  const session = getSession();
  if (changed && session?.role === 'Quản lý' && managerScheduleBackdrop?.classList.contains('open')) renderManagerSchedule(session);
}, 60 * 1000);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) return;
  const changed = reconcileManagerScheduleArchiveV57();
  const session = getSession();
  if ((changed || managerScheduleBackdrop?.classList.contains('open')) && session?.role === 'Quản lý' && managerScheduleBackdrop?.classList.contains('open')) renderManagerSchedule(session);
});
window.addEventListener('storage', (event) => {
  // Dữ liệu nghiệp vụ dùng chung giữa các tab; phiên đăng nhập vẫn riêng từng tab bằng sessionStorage.
  if (event.key === SALON_PROFILE_KEY) {
    renderSalonProfile();
    if (contactBackdrop?.classList.contains('open')) setContactModeForSession();
    if (customerIntroBackdrop?.classList.contains('open')) renderCustomerIntroduction();
  }
  if (event.key === APPOINTMENTS_KEY) {
    const session = getSession();
    if (session?.role === 'Khách hàng' && myScheduleBackdrop?.classList.contains('open')) renderMySchedule();
    if (session?.role === 'Quản lý' && managerScheduleBackdrop?.classList.contains('open')) renderManagerSchedule(session);
    if (session?.role === 'Quản lý' && document.querySelector('[data-manager-finance-view="revenue"]')?.classList.contains('is-active')) revenueRenderDashboard();
    if (session?.role === 'Quản lý' && document.querySelector('[data-manager-finance-view="expenses"]')?.classList.contains('is-active')) expenseRenderDashboard(false);
    if (session?.role === 'Quản lý' && document.querySelector('[data-manager-config-panel="customers"]')?.classList.contains('is-active')) renderManagerCustomerPanel();
    if (session?.role === 'Nhân viên' && document.body.classList.contains('staff-workspace-mode')) renderStaffWorkspaceV59(currentStaffPanelV59);
    if (staffSelectBackdrop?.classList.contains('open') && staffSelectionAppointmentId) openStaffSelectModal(staffSelectionAppointmentId);
    if (managerCommsBackdrop?.classList.contains('open')) renderManagerRecipientList(managerCommsSearch?.value || '');
    if (bookingBackdrop?.classList.contains('open')) { updateBookingSummary(); renderServiceTableStatus(); }
  }
  if (event.key === NOTIFICATION_KEY) {
    renderNotifications();
    if (getSession()?.role === 'Nhân viên' && currentStaffPanelV59 === 'notifications') renderStaffNotificationsV59();
    if (promotionHistoryBackdrop?.classList.contains('open')) renderPromotionHistory();
    const openId = notificationDetailBackdrop?.dataset.notificationId || '';
    if (openId && !notificationStore().some(item => item.id === openId)) closeNotificationDetailModal();
  }
  if (event.key === PROMOTION_CAMPAIGN_KEY) {
    if (promotionHistoryBackdrop?.classList.contains('open')) renderPromotionHistory();
  }
  if (event.key === 'beauty_accounts_v02') {
    if (managerCommsBackdrop?.classList.contains('open')) renderManagerRecipientList(managerCommsSearch?.value || '');
    if (getSession()?.role==='Quản lý' && document.querySelector('[data-manager-config-panel="customers"]')?.classList.contains('is-active')) renderManagerCustomerPanel();
    if (bookingContextRole === 'manager' && bookingBackdrop?.classList.contains('open')) renderManagerBookingCustomerOptions(managerBookingCustomerSearch?.value || '');
  }
  if (event.key === CUSTOMER_TIER_CRITERIA_KEY) {
    if (getSession()?.role==='Quản lý' && document.querySelector('[data-manager-config-panel="customers"]')?.classList.contains('is-active')) renderManagerCustomerPanel();
    if (managerCommsBackdrop?.classList.contains('open')) renderManagerRecipientList(managerCommsSearch?.value || '');
  }
  if (event.key === STAFF_KEY) {
    const session = getSession();
    if (session?.role === 'Khách hàng' && myScheduleBackdrop?.classList.contains('open')) renderMySchedule();
    if (session?.role === 'Khách hàng' && staffSelectBackdrop?.classList.contains('open') && staffSelectionAppointmentId) openStaffSelectModal(staffSelectionAppointmentId);
    if (session?.role === 'Quản lý' && document.body.classList.contains('manager-config-mode')) renderManagerStaffPanel();
    if (session?.role === 'Quản lý' && managerScheduleBackdrop?.classList.contains('open')) renderManagerSchedule(session);
    if (session?.role === 'Nhân viên' && document.body.classList.contains('staff-workspace-mode')) renderStaffWorkspaceV59(currentStaffPanelV59);
  }
  if (event.key === STAFF_APPLICATION_KEY) {
    if (staffApplicationBackdrop?.classList.contains('open')) renderStaffApplicationList();
  }
  if (event.key === STAFF_RATING_CRITERIA_KEY || event.key === STAFF_QUARTER_ARCHIVE_KEY) {
    const session=getSession();
    if (session?.role === 'Quản lý' && document.body.classList.contains('manager-config-mode')) renderManagerStaffPanel();
  }
  if (event.key === APPOINTMENTS_KEY) {
    const session = getSession();
    if (session?.role === 'Quản lý' && document.body.classList.contains('manager-config-mode')) renderManagerStaffPanel();
  }
  if (event.key === EXPENSE_STORE_KEY) {
    const session=getSession();
    if (session?.role === 'Quản lý' && document.querySelector('[data-manager-finance-view="expenses"]')?.classList.contains('is-active')) expenseRenderDashboard();
  }
  if (event.key === SERVICE_CATALOG_KEY || event.key === SERVICE_OVERRIDE_KEY) {
    loadCustomServicesIntoMemory();
    renderServiceCatalogEverywhere();
    if (customerIntroBackdrop?.classList.contains('open')) renderCustomerIntroduction();
    if (getSession()?.role === 'Quản lý' && document.querySelector('[data-manager-finance-view="revenue"]')?.classList.contains('is-active')) revenueRenderDashboard();
    if (getSession()?.role === 'Nhân viên' && document.body.classList.contains('staff-workspace-mode')) renderStaffWorkspaceV59(currentStaffPanelV59);
  }
  if (event.key === NAIL_SAMPLE_KEY) {
    renderNailGallery();
  }
  if (event.key === HERO_VISUAL_KEY) {
    renderDailyHeroVisual();
    renderManagerHeroTools();
  }
  if (event.key === WORK_HOURS_KEY) {
    renderDailyHeroVisual();
    renderManagerHeroTools();
    refreshBookingTimeOptions(true);
    if (customerIntroBackdrop?.classList.contains('open')) renderCustomerIntroduction();
    if (bookingBackdrop?.classList.contains('open')) updateBookingSummary();
    if (getSession()?.role === 'Nhân viên' && document.body.classList.contains('staff-workspace-mode')) renderStaffWorkspaceV59(currentStaffPanelV59);
  }
});

renderSalonProfile();
renderDailyHeroVisual();
renderManagerHeroTools();
normalizeVietnameseTypography(document);

// Vision 51: nếu mở app qua nửa đêm, nội dung/ảnh/giờ hiển thị tự làm mới theo ngày mới.
setInterval(()=>{
  const heroCopy=$('dailyHeroCopy');
  const today=dailyLocalDateKey();
  if(heroCopy?.dataset.dailyHeroDate!==today) { renderDailyHero(getSession()); renderDailyHeroVisual(); }
},60*1000);

// Vision 42: tự nhận biết ngày 05 của quý mới và chuyển/reset bảng đánh giá mà không xóa dữ liệu lịch sử.
setInterval(() => {
  const session=getSession();
  if (session?.role === 'Quản lý' && document.body.classList.contains('manager-config-mode') && document.querySelector('[data-manager-config-panel="staff"]')?.classList.contains('is-active')) {
    archiveClosedQuartersV42(new Date());
    renderManagerStaffPanel();
  }
}, 60 * 1000);

// Vision 36: kiểm tra định kỳ để chương trình khuyến mại hết 48 giờ tự biến mất cả ở danh sách và bộ đếm chưa xem.
setInterval(() => {
  promotionCampaignStore();
  pruneExpiredPromotionNotifications();
  renderCustomerNavCounters(getSession());
  if (notificationPanel?.classList.contains('open')) renderNotifications();
  if (promotionHistoryBackdrop?.classList.contains('open')) renderPromotionHistory();
}, 60 * 1000);

$$('[data-toggle-password]').forEach(btn => btn.addEventListener('click',()=>{
  const input = $(btn.dataset.togglePassword);
  input.type = input.type === 'password' ? 'text' : 'password';
  btn.textContent = input.type === 'password' ? 'Hiện' : 'Ẩn';
}));

function buildOtp(containerId) {
  const container = $(containerId); container.innerHTML='';
  for(let i=0;i<6;i++){
    const input=document.createElement('input'); input.type='text'; input.inputMode='numeric'; input.maxLength=1; input.setAttribute('aria-label',`Số ${i+1}`);
    input.addEventListener('input',()=>{ input.value=input.value.replace(/\D/g,'').slice(0,1); if(input.value && input.nextElementSibling) input.nextElementSibling.focus(); });
    input.addEventListener('keydown',(e)=>{ if(e.key==='Backspace'&&!input.value&&input.previousElementSibling) input.previousElementSibling.focus(); });
    input.addEventListener('paste',(e)=>{ const d=e.clipboardData.getData('text').replace(/\D/g,'').slice(0,6); if(!d)return; e.preventDefault(); [...container.children].forEach((el,idx)=>el.value=d[idx]||''); container.children[Math.min(d.length,6)-1].focus(); });
    container.appendChild(input);
  }
}
buildOtp('registerOtpInputs'); buildOtp('forgotOtpInputs');
function otpValue(containerId){ return [...$(containerId).children].map(i=>i.value).join(''); }
function clearOtp(containerId){ [...$(containerId).children].forEach(i=>i.value=''); }

$('bookingForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const session = getSession();
  const msg = $('bookingMessage');
  msg.className = 'form-message';
  if (!session || !['Khách hàng','Quản lý'].includes(session.role)) {
    msg.textContent = 'Vui lòng đăng nhập tài khoản Khách hàng hoặc Quản lý để đăng ký lịch.';
    return;
  }
  const isManagerBooking = session.role === 'Quản lý' && bookingContextRole === 'manager';
  let customerContext;
  if (isManagerBooking) {
    customerContext = managerBookingCustomerContext();
    if (!customerContext.valid) { msg.textContent = customerContext.message; return; }
  } else {
    if (session.role !== 'Khách hàng') { msg.textContent='Tài khoản Quản lý cần mở chế độ “Đăng ký lịch cho khách”.'; return; }
    const phone = normalizePhone(session.phone || '');
    const customerAccount = customerAccountByPhone(phone);
    customerContext = {
      valid:true, hasAccount:true, source:'customer-app', sourceLabel:'APP khách',
      customerId: customerAccount?.customerId || customerIdForPhone(phone),
      name: session.name || 'Khách hàng', phone,
      address: session.address || customerAccount?.address || '',
      gender: normalizeCustomerGender(session.gender || customerAccount?.gender || '')
    };
  }
  const name = customerContext.name;
  const phone = customerContext.phone;
  const customerAddress = customerContext.address || '';
  const customerGender = customerContext.gender || '';
  const serviceId = $('bookingService').value;
  const service = SERVICE_DATA[serviceId];
  const date = $('bookingDate').value;
  const time = $('bookingTime').value;
  const employeeName = '';
  const seatPreference = '';
  const note = $('bookingNote').value.trim();
  const nailSample = serviceId === 'nail-care' ? ($('bookingNailSample')?.value || '') : '';
  let tableNumber = null;
  if (!service) { msg.textContent = 'Vui lòng chọn dịch vụ.'; return; }
  if (!date) { msg.textContent = 'Vui lòng chọn ngày hẹn.'; return; }
  if (!time) { msg.textContent = 'Vui lòng chọn giờ bắt đầu.'; return; }
  const hoursCheck = validateBookingWithinShopHours(date,time,durationToMinutes(service.duration));
  if (!hoursCheck.valid) {
    msg.textContent = `Khung giờ này nằm ngoài giờ mở tiệm ${formatHoursRange(hoursCheck.hours)} của ngày đã chọn.`;
    refreshBookingTimeOptions(false);
    return;
  }
  const bookingLockToken = acquireBookingWriteLock();
  if (!bookingLockToken) {
    msg.textContent = 'Hệ thống đang xử lý một lịch khác. Vui lòng bấm xác nhận lại sau giây lát để tránh trùng tài nguyên.';
    return;
  }
  const resourceCfg = serviceTableConfig(serviceId);
  if (resourceCfg.tables) {
    tableNumber = firstFreeServiceTable(serviceId);
    if (!tableNumber) {
      if (isManagerBooking) {
        const suggestions = managerBookingNextAvailableTimes(serviceId,date,3);
        msg.textContent = suggestions.length
          ? `Khung ${time} hiện đã kín ${resourceCfg.tables}/${resourceCfg.tables} ${resourceCfg.label}. Gợi ý gần nhất còn chỗ: ${suggestions.join(' • ')}.`
          : `Khung ${time} hiện đã kín ${resourceCfg.tables}/${resourceCfg.tables} ${resourceCfg.label} và hôm nay chưa còn khung phù hợp. Hãy chọn ngày khác.`;
      } else {
        msg.textContent = `Khung giờ này chưa còn bàn trống cho ${service.title}. Bạn có thể đổi giờ khác hoặc xem Danh sách khách chờ.`;
      }
      renderServiceTableStatus();
      releaseBookingWriteLock(bookingLockToken);
      return;
    }
  }
  const startAt = `${date}T${time}:00`;
  const endDate = new Date(startAt);
  endDate.setMinutes(endDate.getMinutes() + durationToMinutes(service.duration));
  const nowIso = new Date().toISOString();
  const appointment = {
    id: `appt-${Date.now()}`,
    customerId: customerContext.customerId || customerIdForPhone(phone),
    guestId: customerContext.guestId || null,
    customerHasAccount: Boolean(customerContext.hasAccount),
    customerName: name,
    customerPhone: phone,
    customerAddress,
    customerGender,
    serviceId,
    serviceName: service.title,
    employeeName,
    seatPreference,
    nailSample,
    tableNumber,
    note,
    price: service.price,
    duration: service.duration,
    serviceMinutes: serviceTimingMetaV60(service).serviceMinutes,
    bufferMinutes: serviceTimingMetaV60(service).bufferMinutes,
    totalDurationMinutes: serviceTimingMetaV60(service).totalMinutes,
    startAt,
    endAt: endDate.toISOString(),
    displayDate: new Date(startAt).toLocaleDateString('vi-VN', { weekday:'long', day:'2-digit', month:'2-digit', year:'numeric' }),
    displayTime: time,
    displayEndTime: formatTimeFromDate(endDate),
    bookingSource: customerContext.source,
    bookingSourceLabel: customerContext.sourceLabel,
    createdByRole: session.role,
    status: isManagerBooking ? 'Đã nhận lịch' : 'Chờ xác nhận',
    managerDecisionAt: isManagerBooking ? nowIso : null,
    confirmedAt: isManagerBooking ? nowIso : null,
    autoConfirmedByManager: isManagerBooking,
    createdAt: nowIso
  };
  const data = appointmentStore();
  let staffReleasedOnReschedule = null;
  if (editingAppointmentId && !isManagerBooking) {
    const previous = data.find(item=>item.id===editingAppointmentId);
    if (previous?.serviceStaffId) {
      const assignedStaff = staffStore().find(row=>row.id===previous.serviceStaffId);
      if (assignedStaff) {
        const candidate = {...appointment,id:editingAppointmentId,serviceStaffId:previous.serviceStaffId,serviceStaffName:previous.serviceStaffName};
        const availability = staffAvailabilityForAppointmentV60(assignedStaff,candidate,editingAppointmentId);
        if (availability.available) {
          appointment.serviceStaffId = previous.serviceStaffId; appointment.serviceStaffName = previous.serviceStaffName; appointment.staffWorkStatus='scheduled';
        } else {
          staffReleasedOnReschedule = {staff:assignedStaff,previous};
        }
      }
    }

    const idx = data.findIndex(item => item.id === editingAppointmentId);
    if (idx >= 0) {
      appointment.id = editingAppointmentId;
      appointment.createdAt = data[idx].createdAt || appointment.createdAt;
      appointment.bookingSource = data[idx].bookingSource || 'customer-app';
      appointment.bookingSourceLabel = data[idx].bookingSourceLabel || 'APP khách';
      appointment.status = 'Chờ xác nhận';
      appointment.managerDecisionAt = null;
      appointment.confirmedAt = null;
      appointment.reofferStatus = null;
      appointment.reofferToken = null;
      appointment.completed = false;
      appointment.completedAt = null;
      data[idx] = appointment;
      removeReofferNotificationsForAppointment(editingAppointmentId);
    } else {
      data.push(appointment);
    }
  } else {
    data.push(appointment);
  }
  saveAppointmentStore(data);
  if (staffReleasedOnReschedule) createStaffAssignmentNotificationV59(staffReleasedOnReschedule.previous, staffReleasedOnReschedule.staff, 'removed');
  releaseBookingWriteLock(bookingLockToken);
  const wasEditing = Boolean(editingAppointmentId && !isManagerBooking);
  if (isManagerBooking) {
    if (customerContext.hasAccount) createCustomerDecisionNotification(appointment,'accept');
  } else {
    createBookingNotification(appointment);
    createManagerBookingNotification(appointment, wasEditing ? 'updated' : 'new');
  }
  editingAppointmentId = null;
  closeBookingModal();
  renderMySchedule();
  renderManagerServiceControls();
  if (isManagerBooking) {
    const sourceText = customerContext.hasAccount ? 'khách có tài khoản' : 'khách vãng lai';
    const resourceText = tableNumber ? `BÀN ${tableNumber} được xác nhận ngay.` : 'Lịch đã được xác nhận ngay.';
    showToast(`Đã đăng ký ${service.title} cho ${name} (${sourceText}) lúc ${time}. ${resourceText}`);
  } else {
    showToast(wasEditing ? (staffReleasedOnReschedule ? 'Đã gửi yêu cầu đổi lịch. Nhân viên cũ bị trùng ở khung mới nên đã được bỏ gán; hãy chọn lại NV phù hợp.' : 'Đã gửi yêu cầu đổi lịch. Trạng thái chuyển về Chờ xác nhận.') : `Đã gửi lịch hẹn ${service.title} lúc ${time}. Bạn có thể xem lại trong “Lịch của tôi”.`);
  }
});

$('registerForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const name=$('regName').value.trim(), phone=normalizePhone($('regPhone').value), password=$('regPassword').value;
  const isCustomer = currentRole === 'Khách hàng';
  const address = isCustomer ? ($('regAddress')?.value || '').trim() : '';
  const gender = isCustomer ? normalizeCustomerGender($('regGender')?.value || '') : '';
  const msg=$('registerMessage'); msg.className='form-message';
  if(name.length<2){msg.textContent='Vui lòng nhập họ và tên.';return;}
  if(!isValidPhone(phone)){msg.textContent='Số điện thoại chưa đúng định dạng.';return;}
  if(isCustomer && address.length<3){msg.textContent='Vui lòng nhập địa chỉ.';return;}
  if(isCustomer && !gender){msg.textContent='Vui lòng chọn giới tính.';return;}
  if(password.length<6){msg.textContent='Mật khẩu cần tối thiểu 6 ký tự.';return;}
  const data=accounts();
  if(data[accountKey(currentRole,phone)]){msg.textContent='Số điện thoại này đã có tài khoản ở vai trò đã chọn. Hãy chuyển sang Đăng nhập.';return;}
  pendingRegistration={name,phone,password,role:currentRole,address,gender};
  registerOtp=sendMockOtp('register',phone);
  $('registerOtpPhone').textContent=phone; clearOtp('registerOtpInputs'); $('registerOtpMessage').textContent='';
  setHeader('verify'); showView($('registerOtpView')); setTimeout(()=>$('registerOtpInputs').firstElementChild.focus(),80);
});
$('resendRegisterOtp').addEventListener('click',()=>{ if(pendingRegistration){registerOtp=sendMockOtp('register',pendingRegistration.phone);clearOtp('registerOtpInputs');} });
$('verifyRegisterOtp').addEventListener('click',()=>{
  const msg=$('registerOtpMessage'); msg.className='form-message center';
  const entered=otpValue('registerOtpInputs');
  if(entered.length<6){msg.textContent='Vui lòng nhập đủ 6 số.';return;}
  if(entered!==registerOtp){msg.textContent='Mã xác thực không đúng.';return;}
  const data=accounts(); data[accountKey(pendingRegistration.role,pendingRegistration.phone)]={...pendingRegistration,customerId:pendingRegistration.role==='Khách hàng'?customerIdForPhone(pendingRegistration.phone):undefined,createdAt:new Date().toISOString()}; saveAccounts(data);
  $('successTitle').textContent='Đăng ký thành công'; $('successText').textContent=`Số điện thoại đã xác thực OTP. Tài khoản ${pendingRegistration.role} đã được tạo và bạn có thể đăng nhập ngay.`; successAction='login';
  showView($('successView'));
});

$('loginForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const name=$('loginName').value.trim(), phone=normalizePhone($('loginPhone').value), password=$('loginPassword').value;
  const msg=$('loginMessage'); msg.className='form-message';
  if(name.length<2){msg.textContent='Vui lòng nhập họ và tên.';return;}
  if(!isValidPhone(phone)){msg.textContent='Số điện thoại chưa đúng định dạng.';return;}
  if(password.length<6){msg.textContent='Vui lòng nhập mật khẩu.';return;}
  const acct=accounts()[accountKey(currentRole,phone)];
  if(!acct){msg.textContent='Chưa tìm thấy tài khoản. Hãy chọn Đăng ký nếu đây là lần đầu sử dụng.';return;}
  if(acct.password!==password){msg.textContent='Mật khẩu không đúng.';return;}
  if(acct.name.trim().toLowerCase()!==name.toLowerCase()){msg.textContent='Họ và tên chưa khớp với tài khoản đã đăng ký.';return;}
  saveSession({name:acct.name,phone:acct.phone || phone,role:currentRole,address:acct.address || '',gender:acct.gender || '',loggedInAt:new Date().toISOString()});
  renderSessionHeader();
  $('successTitle').textContent='Đăng nhập thành công'; $('successText').textContent=`Xin chào ${acct.name}. Thông tin tài khoản đã được hiển thị ở góc phải phía trên.`; successAction='close';
  showView($('successView'));
});

$('forgotForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const phone=normalizePhone($('forgotPhone').value), msg=$('forgotMessage'); msg.className='form-message';
  if(!isValidPhone(phone)){msg.textContent='Vui lòng nhập đúng số điện thoại.';return;}
  const acct=accounts()[accountKey(currentRole,phone)];
  if(!acct){msg.textContent='Không tìm thấy tài khoản ở vai trò đã chọn.';return;}
  resetPhone=phone; forgotOtp=sendMockOtp('forgot',phone); $('forgotOtpPhone').textContent=phone; clearOtp('forgotOtpInputs'); $('forgotOtpMessage').textContent='';
  setHeader('verify'); showView($('forgotOtpView')); setTimeout(()=>$('forgotOtpInputs').firstElementChild.focus(),80);
});
$('resendForgotOtp').addEventListener('click',()=>{if(resetPhone){forgotOtp=sendMockOtp('forgot',resetPhone);clearOtp('forgotOtpInputs');}});
$('verifyForgotOtp').addEventListener('click',()=>{
  const msg=$('forgotOtpMessage'), entered=otpValue('forgotOtpInputs'); msg.className='form-message center';
  if(entered.length<6){msg.textContent='Vui lòng nhập đủ 6 số.';return;}
  if(entered!==forgotOtp){msg.textContent='Mã xác thực không đúng.';return;}
  $('newPassword').value='';$('confirmPassword').value='';$('resetMessage').textContent='';setHeader('verify');showView($('resetPasswordView'));setTimeout(()=>$('newPassword').focus(),80);
});
$('resetPasswordForm').addEventListener('submit',(e)=>{
  e.preventDefault(); const p1=$('newPassword').value,p2=$('confirmPassword').value,msg=$('resetMessage');msg.className='form-message';
  if(p1.length<6){msg.textContent='Mật khẩu mới cần tối thiểu 6 ký tự.';return;}
  if(p1!==p2){msg.textContent='Hai mật khẩu chưa trùng nhau.';return;}
  const data=accounts(), key=accountKey(currentRole,resetPhone); if(!data[key]){msg.textContent='Không tìm thấy tài khoản.';return;}
  data[key].password=p1; data[key].passwordUpdatedAt=new Date().toISOString(); saveAccounts(data);
  $('successTitle').textContent='Đổi mật khẩu thành công'; $('successText').textContent='Bạn có thể sử dụng mật khẩu mới để đăng nhập.'; successAction='login'; showView($('successView'));
});
$('successContinue').addEventListener('click',()=>{
  if(successAction==='login'){
    if(pendingRegistration){$('loginName').value=pendingRegistration.name;$('loginPhone').value=pendingRegistration.phone;pendingRegistration=null;}
    if(resetPhone){$('loginPhone').value=resetPhone;resetPhone='';}
    goLogin(); setTimeout(()=>$('loginPassword').focus(),80);
  } else {
    closeModal();
    const session = getSession();
    if(session) showToast(`Xin chào ${session.name}. Bạn đã đăng nhập thành công.`);
  }
});

function setManagerFinanceView(viewKey='overview') {
  managerFinanceMenuButtons.forEach(item => item.classList.toggle('is-active', item.dataset.managerFinanceMenu === viewKey));
  managerFinanceViews.forEach(view => view.classList.toggle('is-active', view.dataset.managerFinanceView === viewKey));
  if (viewKey === 'revenue') {
    revenueRenderDashboard();
    requestAnimationFrame(() => {
      [revenueDailyTableWrap,revenueMonthlyTableWrap,revenueYearlyTableWrap,serviceUsageTableWrap].forEach(wrap => { if (wrap) { wrap.scrollLeft=0; wrap.scrollTop=0; } });
    });
  }
  if (viewKey === 'expenses') {
    expenseRenderDashboard();
    requestAnimationFrame(() => {
      const wrap=document.querySelector('.expense-table-wrap');
      if (wrap) { wrap.scrollLeft=0; wrap.scrollTop=0; }
      if (profitMonthlyTableWrap) { profitMonthlyTableWrap.scrollLeft=0; profitMonthlyTableWrap.scrollTop=0; }
    });
  }
}
managerFinanceMenuButtons.forEach(btn => btn.addEventListener('click', () => setManagerFinanceView(btn.dataset.managerFinanceMenu || 'overview')));
if (expenseFilterCategory) expenseFilterCategory.addEventListener('change', () => {
  expenseFilterKey=expenseFilterCategory.value || 'all';
  expenseRenderDashboard();
});
if (expenseFilterReset) expenseFilterReset.addEventListener('click', () => {
  expenseFilterKey='all';
  if (expenseFilterCategory) expenseFilterCategory.value='all';
  expenseRenderDashboard();
});
if (expenseTableBody) {
  expenseTableBody.addEventListener('input', (event) => {
    const tr=event.target.closest('[data-expense-row]');
    if (tr && ['quantity','unitPrice'].includes(event.target.dataset.expenseField || '')) expenseRefreshRowTotal(tr);
  });
  expenseTableBody.addEventListener('change', (event) => {
    const tr=event.target.closest('[data-expense-row]');
    if (!tr) return;
    expenseRefreshRowTotal(tr);
    if (tr.dataset.expenseDraft === '1') expenseCreateFromDraft(tr);
    else expenseSaveExistingRow(tr);
  });
  expenseTableBody.addEventListener('click', (event) => {
    const btn=event.target.closest('[data-expense-delete]');
    if (btn) expenseDelete(btn.dataset.expenseDelete || '');
  });
}
if (profitArchiveBtn) profitArchiveBtn.addEventListener('click', profitOpenArchive);
if (profitViewAllBtn) profitViewAllBtn.addEventListener('click', profitOpenAll);
if (closeProfitArchive) closeProfitArchive.addEventListener('click', profitCloseArchive);
if (profitArchiveCloseBottom) profitArchiveCloseBottom.addEventListener('click', profitCloseArchive);
if (profitArchiveBackdrop) profitArchiveBackdrop.addEventListener('click', event=>{ if(event.target===profitArchiveBackdrop) profitCloseArchive(); });
if (closeProfitAll) closeProfitAll.addEventListener('click', profitCloseAll);
if (profitAllCloseBottom) profitAllCloseBottom.addEventListener('click', profitCloseAll);
if (profitAllBackdrop) profitAllBackdrop.addEventListener('click', event=>{ if(event.target===profitAllBackdrop) profitCloseAll(); });
if (profitPrintBtn) profitPrintBtn.addEventListener('click', profitPrintAll);
if (revenueArchiveBtn) revenueArchiveBtn.addEventListener('click', revenueOpenArchive);
if (revenueViewAllBtn) revenueViewAllBtn.addEventListener('click', revenueOpenAll);
if (closeRevenueArchive) closeRevenueArchive.addEventListener('click', revenueCloseArchive);
if (revenueArchiveCloseBottom) revenueArchiveCloseBottom.addEventListener('click', revenueCloseArchive);
if (revenueArchiveBackdrop) revenueArchiveBackdrop.addEventListener('click', e=>{ if(e.target===revenueArchiveBackdrop) revenueCloseArchive(); });
if (closeRevenueArchiveDetail) closeRevenueArchiveDetail.addEventListener('click', revenueCloseArchiveDetail);
if (revenueArchiveDetailCloseBottom) revenueArchiveDetailCloseBottom.addEventListener('click', revenueCloseArchiveDetail);
if (revenueArchiveDetailBackdrop) revenueArchiveDetailBackdrop.addEventListener('click', e=>{ if(e.target===revenueArchiveDetailBackdrop) revenueCloseArchiveDetail(); });
if (closeRevenueAll) closeRevenueAll.addEventListener('click', revenueCloseAll);
if (revenueAllCloseBottom) revenueAllCloseBottom.addEventListener('click', revenueCloseAll);
if (revenueAllBackdrop) revenueAllBackdrop.addEventListener('click', e=>{ if(e.target===revenueAllBackdrop) revenueCloseAll(); });
if (revenuePrintPdfBtn) revenuePrintPdfBtn.addEventListener('click', revenuePrintAll);
if (revenueMonthlyArchiveBtn) revenueMonthlyArchiveBtn.addEventListener('click', revenueOpenMonthlyArchive);
if (revenueMonthlyViewAllBtn) revenueMonthlyViewAllBtn.addEventListener('click', revenueOpenMonthlyAll);
if (closeRevenueMonthlyArchive) closeRevenueMonthlyArchive.addEventListener('click', revenueCloseMonthlyArchive);
if (revenueMonthlyArchiveCloseBottom) revenueMonthlyArchiveCloseBottom.addEventListener('click', revenueCloseMonthlyArchive);
if (revenueMonthlyArchiveBackdrop) revenueMonthlyArchiveBackdrop.addEventListener('click', e=>{ if(e.target===revenueMonthlyArchiveBackdrop) revenueCloseMonthlyArchive(); });
if (closeRevenueMonthlyArchiveDetail) closeRevenueMonthlyArchiveDetail.addEventListener('click', revenueCloseMonthlyArchiveDetail);
if (revenueMonthlyArchiveDetailCloseBottom) revenueMonthlyArchiveDetailCloseBottom.addEventListener('click', revenueCloseMonthlyArchiveDetail);
if (revenueMonthlyArchiveDetailBackdrop) revenueMonthlyArchiveDetailBackdrop.addEventListener('click', e=>{ if(e.target===revenueMonthlyArchiveDetailBackdrop) revenueCloseMonthlyArchiveDetail(); });
if (closeRevenueMonthlyAll) closeRevenueMonthlyAll.addEventListener('click', revenueCloseMonthlyAll);
if (revenueMonthlyAllCloseBottom) revenueMonthlyAllCloseBottom.addEventListener('click', revenueCloseMonthlyAll);
if (revenueMonthlyAllBackdrop) revenueMonthlyAllBackdrop.addEventListener('click', e=>{ if(e.target===revenueMonthlyAllBackdrop) revenueCloseMonthlyAll(); });
if (revenueMonthlyPrintPdfBtn) revenueMonthlyPrintPdfBtn.addEventListener('click', revenuePrintMonthlyAll);
