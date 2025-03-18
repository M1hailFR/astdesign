import { initializeApp } from '@firebase/app';
import { getAnalytics } from '@firebase/analytics';

export default defineNuxtPlugin((nuxtApp) => {
	const firebaseConfig = {
		apiKey: 'AIzaSyCwWox7LN3MvSUpPaZY-_NyCkuC17C_ZPI',
		authDomain: 'rmnvch-resume.firebaseapp.com',
		projectId: 'rmnvch-resume',
		storageBucket: 'rmnvch-resume.firebasestorage.app',
		messagingSenderId: '650268771761',
		appId: '1:650268771761:web:7ec5139544a1c809046990',
		measurementId: 'G-566MN20332'
	};
	console.log(firebaseConfig);
	// @ts-ignore
	const app = initializeApp(firebaseConfig);

	// Analytics может быть инициализирован только на клиенте
	let analytics = null;
	if (process.client) {
		try {
			analytics = getAnalytics(app);
		} catch (e) {
			console.error('Analytics failed to initialize:', e);
		}
	}

	return {
		provide: {
			firebase: app,
			analytics: analytics
		}
	};
});
