import { window, commands, ExtensionContext, workspace } from "vscode";
import * as open from "open";
import * as fs from "fs";

const getLinkztxtfile = (): string | undefined => {
	const filepath = workspace.rootPath + "/linkz.txt";
	if (fs.existsSync(filepath)) {
		return fs.readFileSync(filepath, "utf-8");
	} else {
		window.showErrorMessage("linkz.txt file not found!");
		return undefined;
	}
};

const getLinkzAsMap = (linkztxt: string): Map<string, string> => {
	const linkz = new Map();
	const splits = linkztxt.split("\n\n");
	splits.forEach((s: string) => {
		const keyAndValue = s.split("\n");
		const key: string = keyAndValue[0];
		const value: string = keyAndValue[1];
		linkz.set(key, value);
	});
	return linkz;
};

export function activate(context: ExtensionContext) {
	context.subscriptions.push(
		commands.registerCommand("linkz.list", async () => {
			const linkztxt = getLinkztxtfile();
			if (linkztxt === undefined) return;

			const linkzMap = getLinkzAsMap(linkztxt);

			const quickPick = window.createQuickPick();
			const items: { label: string }[] = [];

			linkzMap.forEach((_: string, key: string) => {
				items.push({
					label: key
				});
			});

			quickPick.items = items;

			quickPick.onDidChangeSelection(selection => {
				if (selection[0]) {
					const selectedItem = selection[0];
					const uri: string = linkzMap.get(
						selectedItem.label
					) ?? "";
					if (uri) {
						open(uri);
					}
				}
			});

			quickPick.onDidHide(() => quickPick.dispose());
			quickPick.show();
		})
	);
}
