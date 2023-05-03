export const middleware = {
    FPS: (rate: number, callback: () => void) => {
        const delay: number = 1000 / rate;
                
        var frame: number = -1;
        var timeoutRefrence: number;
        var time: null | number = null;

        function loop(timestamp: number) {
            if (time === null) time = timestamp;

            
        }
    }
}