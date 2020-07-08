import { trigger, style, animate, transition, state, query, stagger } from '@angular/animations';

export const showUpStaggered = trigger('showUpCollection',[
    transition('* => *',[
        query(':enter',[
            style({opacity:0,transform:'scaleY(0)'}),
            stagger(100,[
                animate(250, style({opacity:1, transform: 'scaleY(1)'}))
            ])
        ],{optional:true})
    ])
]);

export const showUp = trigger('showUpElement',[
    state('in',style({opacity:1, transform: 'scaleY(1)'})),
    transition(':enter',[
        style({opacity:0,transform:'scaleY(0)'}),
        animate(200)
    ])
]);