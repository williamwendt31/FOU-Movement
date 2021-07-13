export class Founder {
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _background: string;
    public get background(): string {
        return this._background;
    }
    public set background(value: string) {
        this._background = value;
    }

    private _imagePath: string;
    public get imagePath(): string {
        return this._imagePath;
    }
    public set imagePath(value: string) {
        this._imagePath = value;
    }

    constructor(name: string, background: string, imagePath: string) {
        this.name = name;
        this.background = background;
        this.imagePath = imagePath;
    }
}