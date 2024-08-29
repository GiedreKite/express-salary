import { accountsData } from '../../../data/accountsData.js';

export function accountPost(req, res) {
    if (typeof req.body !== 'object') {
        return res.json({
            status: 'error',
            message: 'Netinkamas duomenų tipas, turi būti objektas',
        });
    }

    // tuscias objektas
    // if ()

    accountsData.push({
        ...req.body,
        salary: '---',
    });

    return res.json({
        status: 'success',
        message: 'Paskyra sekmingai sukurta',
    });
}