import  { format } from 'date-fns';

export function dateToString(date) {
    if (!date) { return ''; }
    return format(date, 'yyyy/M/d HH:mm');
}

export function translateErrors(code) {
    const error = { title: 'エラー', descriotion: '時間をおいてお試しください' };
    switch (code) {
        case 'auth/invalid-email':
            error.descriotion = 'メールアドレスが不正です。';
            break;
        case 'auth/user-disabled':
            error.descriotion = 'アカウントが無効です。';
            break;
        case 'auth/user-not-found':
            error.descriotion = 'ユーザーが見つかりませんでした。';
            break;
        case 'auth/wrong-password':
            error.descriotion = 'パスワードが間違っています。';
            break;
        case 'auth/email-already-in-use':
            error.descriotion = 'メールアドレスが使用されています。';
            break;
        case 'auth/invalid-email':
            error.descriotion = 'メールアドレスが不正です。'; 
            break;
        case 'auth/operation-not-allowed':
            error.descriotion = '開発者にお問合せください。';
            break;
        case 'auth/weak-password':
            error.descriotion = 'パスワードが簡単すぎます。';
            break;
        default:
    }
    return error;
}