import { USER_URL } from "src/app/core/constants/url.constants";
import { INavigation } from "src/app/core/models/navigation.model";

export const NavigationMock: INavigation[] = [
    {
        name: 'Trang chủ',
        navLink: USER_URL.homePage,
        classActive: 'active',
        classes: 'nav-link primary',
        order: 0,
    },
    {
        name: 'Dịch vụ',
        navLink: USER_URL.service,
        classActive: 'active',
        classes: 'nav-link primary',
        order: 1,
    },
    // {
    //     name: 'Người giúp việc',
    //     navLink: '',
    //     classActive: '',
    //     classes: 'nav-link primary',
    //     order: 2,
    // },
    {
        name: 'Giới thiệu',
        navLink: USER_URL.introduce,
        classActive: 'active',
        classes: 'nav-link primary',
        order: 3,
    },
    {
        name: 'Liên hệ',
        navLink: '',
        classActive: '',
        classes: 'nav-link primary',
        order: 4,
    },
]