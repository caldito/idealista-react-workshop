const it = () => {
    let id = 0;

    return {
        next() {
            return { value: id++ }
        }
    }
};

export default it();
