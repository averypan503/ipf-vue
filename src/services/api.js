import axios from 'axios'
import { Feedback } from '../mock/feedback.mock'
import { Forms } from '../mock/forms.mock'

const feedback = Feedback
const forms = Forms

const apiClient = axios.create({
    baseURL: 'https://cataas.com',
    timeout:600,
    headers: {}
})

function mockData(data) {
    return new Promise((resolve, reject)=> setTimeout(()=> {resolve(data)}, 500));
}

// apis

// get feedback
export const getFeedback = () => {
    feedback.forEach(f =>f.form = forms.find(form => form.id === f.formId));
    return mockData(Feedback)
}
// get forms
export const getForms = () => {
    return mockData(forms);
}