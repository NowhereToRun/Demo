import { $ } from '@mfelibs/base-utils'
import evercookie from '@mfelibs/base-tools-evercookie'

const fp1 = $('#fp1');
const fp1detail = $('#fp1detail');
const fp2 = $('#fp2');
const fp2detail = $('#fp2detail');

const setFp = $('#setFp');

function init() {
    evercookie.get('fp1', (data, info) => {
        fp1.text(data);
        for (let i in info) {
            let details = '';
            details = i + ': ' + info[i] + '  ';
            fp1detail.append('<p>' + details + '</p>');
        }
    });
    evercookie.get('fp2', (data, info) => {
        fp2.text(data);
        let details = '';
        for (let i in info) {
            let details = '';
            details = i + ': ' + info[i] + '  ';
            fp2detail.append('<p>' + details + '</p>');
        }
    });
}



$(window).on('load', function () {
    init();

    setFp.on('click', function () {
        evercookie.set('fp1', 'fp1fp1fp1');
        evercookie.set('fp2', 'fp2fp2fp2');
    })
});
