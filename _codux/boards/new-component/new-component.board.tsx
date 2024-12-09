import { createBoard, Variant } from '@wixc3/react-board';
import { NewComponent } from '../../../src/components/new-component/new-component';
import { ErrorComponent } from '../../../src/components/error-component/error-component';

export default createBoard({
    name: 'NewComponent',
    Board: () => (
        <div>
            <Variant name="fdg">
                <NewComponent />
            </Variant>
            <Variant name="errr">
                <ErrorComponent message="dfdf" title="dddd" />
            </Variant>
        </div>
    ),
    isSnippet: true,
});
