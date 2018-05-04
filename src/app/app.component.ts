import {Component, OnInit, ViewChild} from '@angular/core';
import {Tab} from '../models/tab';
import { Node } from '../models/node';
import {NewickParser} from '../utils/newick-parser';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {Visualizer} from '../interfaces/visualizer';
import {GeneralizedPythagorasTree} from '../visualizations/generalized-pythagoras-tree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public tabs: Tab[] = [];
    public tree: Node;
    public visualizers: Visualizer[];

    @ViewChild(SidebarComponent) private sidebar: SidebarComponent;

    private parser = new NewickParser();

    constructor() {
        this.createVisualizers();
    }

    ngOnInit(): void {
        this.addTab(this.visualizers[0]); // TODO: remove first tab
    }

    /** @author Jordy Verhoeven */
    parseTree(data: string) {
        const line = this.parser.extractLines(data);

        if (line !== null) {
            this.tree = this.parser.parseTree(line);

            setTimeout(() => {
                this.sidebar.reloadData();
            });
        }
    }
    /** @end-author Jordy Verhoeven */

    /** @author Bart Wesselink */
    public addVisualization(visualizer: Visualizer): void {
        this.addTab(visualizer);
    }

    public closeTab(tab: Tab) {
        const index = this.tabs.indexOf(tab);

        this.tabs = this.tabs.filter(item => item !== tab);

        if (this.tabs.length > 0) {
            this.switchTab(this.tabs[index - 1]);
        }
    }

    public switchTab(tab: Tab) {
        for (const item of this.tabs) {
            item.active = false;
        }

        tab.active = true;
    }

    private createVisualizers(): void {
        this.visualizers = [
            new GeneralizedPythagorasTree(),
        ];
    }

    private addTab(visualizer: Visualizer) {
        this.tabs.push({
            visualizer: visualizer,
            active: false,
        });

        this.switchTab(this.tabs[this.tabs.length - 1]); // always show new visualization when tab is added
    }
    /** @end-author Bart Wesselink */
}
