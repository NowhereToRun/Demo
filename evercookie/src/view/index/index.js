import { $ } from '@mfelibs/base-utils'
import evercookie from '@mfelibs/base-tools-evercookie'

const fp1 = $('#fp1');
const fp2 = $('#fp2');
const setFp = $('#setFp');

function init() {
    evercookie.get('fp1', (data) => {
        fp1.text(data);
    });
    evercookie.get('fp2', (data) => { 
        fp2.text(data);
    });
}



$(window).on('load', function () {
    init();

    setFp.on('click', function(){
        evercookie.set('fp1', 'fp1fp1fp1');
        evercookie.set('fp2', 'fp2fp2fp2');
    })
});
