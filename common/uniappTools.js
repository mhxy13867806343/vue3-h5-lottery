export const uniAppGetCurrentPages=()=>{
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    return {
        ...page,
        options: page.options,
        route: page.route
    }
}
