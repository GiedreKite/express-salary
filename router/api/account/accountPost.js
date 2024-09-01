import { accountsData } from '../../../data/accountsData.js';
import { isName } from '../../../lib/validation.js';

export function accountPost(req, res) {
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null) {
        return res.json({
            status: 'error',
            message: 'Netinkamas duomenų tipas, turi būti objektas',
        });
    }

    const name = req.body.name;
    const nameError = isName(name);
    if (nameError !== '') {
        return res.json({
            status: 'error',
            message: nameError,
        });
    }

    const date = req.body.date;
    // const dateError = isDate(date);
    // if (dateError !== '') {
    //     return res.json({
    //         status: 'error',
    //         message: dateError,
    //     });
    // }

    const rate = req.body.rate;
    // const rateError = isRate(rate);
    // if (rateError !== '') {
    //     return res.json({
    //         status: 'error',
    //         message: rateError,
    //     });
    // }

    accountsData.push({
        ...req.body,
        salary: '---',
    });

    return res.json({
        status: 'success',
        message: 'Paskyra sekmingai sukurta',
    });
}