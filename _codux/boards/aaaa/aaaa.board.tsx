import { createBoard, Variant } from '@wixc3/react-board';
import { Aaaa } from '../../../src/components/aaaa/aaaa';

export default createBoard({
    name: 'Aaaa',
    Board: () => (
        <Variant name="utut">
            <Aaaa
                texttt={'sdfsdfsdfsdfsdfgdkjfhgy zsdfkgsd fkjghgdsfgilhflkjsdlsdflhsdlsdhsfg sdfg/'}
            />
        </Variant>
    ),
    isSnippet: true,
});
