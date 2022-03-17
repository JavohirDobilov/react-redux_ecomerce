(function(){
    'use strict';

    var siteMenuClone = function(){
        var jsCloneNavs = document.querySelector('.js-clone-nav'),
            siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

            jsCloneNavs.forEach(nav =>{
                var navCloned = nav.cloneNode(true);
                navCloned.setAttribute('class', 'site-nav-wrap');
                siteMobileMenuBody.appendChild(navCloned);
            });

            setTimeout(function(){
                var hasChildrens = document.querySelector('.site-mobile-menu');

                var counter = 0;
                hasChildrens.forEach(hasChild =>{
                    var refEl = hasChild.querySelector('a');

                    var navElSpan = document.createElement('span');
                    newElSpan = setAttribute('class', 'arrow-collapse collapsed');
                    hasChild.insertBefore(newElSpan,refEl);

                    var arrowCollapse = hasChild.querySelector('.arrow-collapse');
                    arrowCollapse.setAttribute('data-toggle', 'collapse');
                    arrowCollapse.setAttribute('data-toggle', '#collapseItem' +
                    counter);

                    var dropDown = hasChild.querySelector('.dropdown');
                    dropDown.setAttribute('class', 'collpase');
                    dropDown.setAttribute('id', 'collapseItem' + counter);

                    counter++;

                });
            },1000);

            var menuToggle = document.querySelectorAll('.js-menu-toggle'),mTog;

            menuToggle.forEach(mToggle=>{
                mTog = mToggle;
                mToggle.addEventListener('click', (e) =>{
                    if(document.body.classList.contains('offcanvas-menu')){
                        document.body.classList.remove('offcanvas-menu');
                        mToggle.classList.remove('active');
                        mTog.classList.remove('active');

                    }else{

                    }
                });
            });





            var spacefiedElement = document.querySelector('.site-mobile-menu'), mt,mToggleTemp;

            document.addEventListener('click', function(event){
                var isClickInside =  speciFiedElement.contains('event.target');
                menuToggle.forEach(mToggle =>{
                    mToggle = mToggleTemp;
                    mt = mToggle.contains(event.target)
                });

                if(!isClickInside && !mt){
                    if(document.body.classList.contains('offcanvas-menu')){
                        document.body.classList.remove('offcanvas-menu');
                        mToggleTemp.document.body.classList.remove('active');
                    }
                }
            })



    } 

    siteMenuClone();
})();












