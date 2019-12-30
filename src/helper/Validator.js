import moment from 'moment';

let globalForm = {};

const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const patternPhone = /^08[0-9]+$/;
const patternAlphaNumeric = /^[0-9a-zA-Z]+$/;
const patternAlphaNumericSp = /^[0-9a-zA-Z ]+$/;
const patternNumber = /^[0-9]+$/;
const patternNumberSp = /^[0-9 ]+$/;
const patternLetter = /^[a-zA-Z]+$/;
const patternLetterSp = /^[a-zA-Z ]+$/;

export const ValidateData = (name, value, form) => {
    //set input form
    globalForm = form;

    let error = '';
    let label = form[name].label ? form[name].label : name.toUpperCase();

    const entries = Object.entries(form[name].validation);
    const validatorList = new ValdiatorList();
    for (const [validationName, validationValue] of entries) {
        if (typeof validatorList[validationName] === 'function' && validationValue) {
            error = validatorList[validationName](label, value, validationValue);
        }
        if (error.length !== 0) break;
    }

    return error;
}

export class ValdiatorList {
    isEmailOrPhone = (label, value, rule) => {
        let error = '';
        if (value) {
            error = this.isPhone(label, value, rule);
            if (error.length === 0) {
                error = this.minLength('Phone', value, 8);
            } else {
                error = this.isEmail(label, value, rule);
            }
        }
        return error;
    }

    equals = (label, value, rule) => {
        let targetForm = globalForm[rule];
        let error = '';
        if (targetForm) {
            const targetValue = targetForm.value;
            const targetLabel = targetForm.label ? targetForm.label : rule.toUpperCase();
            if (value !== targetValue) {
                error = label + ' tidak sama dengan ' + targetLabel;
            }
        }
        return error;
    }

    matches = (label, value, rule) => {
        let error = '';
        if (value !== rule && value) {
            error = label + ' tidak benar';
        }
        return error;
    }

    required = (label, value, rule) => {
        let error = '';
        if (value === '') {
            error = label + ' harus diisi';
        }
        return error;
    }

    largeThan = (label, value, rule) => {
        let error = '';
        let dateNow = moment(new Date(), "YYYY-MM-DD");

        let date  = moment(value, "YYYY-MM-DD");

        console.log("now... ",dateNow)
        console.log("value",date.diff(dateNow,'days'))
        if (date.diff(dateNow,'days')<=-1) {
            error ='Date must be larger than today';
        }
        return error;
    }

    minValue = (label, value, rule) => {
        let error = '';
        if ((parseInt(value) < rule || isNaN(value)) && value) {
            error = label + ' nilai nimium adalah ' + rule;
        }
        return error;
    }

    maxValue = (label, value, rule) => {
        let error = '';
        if ((parseInt(value) > rule || isNaN(value)) && value) {
            error = label + ' nilai maksimum adalah ' + rule;
        }
        return error;
    }

    length = (label, value, rule) => {
        let error = '';
        if (value.length !== rule && value) {
            error = 'Panjang ' + label + ' harus ' + rule + ' karakter';
        }
        return error;
    }

    minLength = (label, value, rule) => {
        let error = '';
        if (value.length < rule && value) {
            error = label + ' terlalu pendek, minimum ' + rule + ' karakter';
        }
        return error;
    }

    maxLength = (label, value, rule) => {
        let error = '';
        if (value.length > rule && value) {
            error = label + ' terlalu panjang, maksimal ' + rule + ' karakter';
        }
        return error;
    }

    isEmail = (label, value, rule) => {
        let error = '';
        if (!patternEmail.test(value) && value) {
            error = 'Format email salah';
        }
        return error;
    }

    isPhone = (label, value, rule) => {
        let error = '';
        if (!patternPhone.test(value) && value) {
            error = 'Nomor ponsel salah';
        }
        return error;
    }

    isAlphaNumeric = (label, value, rule) => {
        let error = '';
        if (!patternAlphaNumeric.test(value) && value) {
            error = label + ' hanya boleh alphanumeric';
        }
        return error;
    }

    isAlphaNumericSp = (label, value, rule) => {
        let error = '';
        if (!patternAlphaNumericSp.test(value) && value) {
            error = label + ' hanya boleh alphanumeric dan spasi';
        }
        return error;
    }

    isNumber = (label, value, rule) => {
        let error = '';
        if (!patternNumber.test(value) && value) {
            error = label + ' haya boleh angka';
        }
        return error;
    }

    isNumberSp = (label, value, rule) => {
        let error = '';
        if (!patternNumberSp.test(value) && value) {
            error = label + ' hanya boleh angka dan spasi';
        }
        return error;
    }

    isLetter = (label, value, rule) => {
        let error = '';
        if (!patternLetter.test(value) && value) {
            error = label + ' hanya boleh huruf';
        }
        return error;
    }

    isLetterSp = (label, value, rule) => {
        let error = '';
        if (!patternLetterSp.test(value) && value) {
            error = label + ' hanya boleh huruf dan spasi';
        }
        return error;
    }
}
