import type { WashRuntime } from '@menzies-mariesta-com/menzies-design-wash-ui/core';

let runtime = $state<WashRuntime | undefined>(undefined);

export function setWashRuntime(next: WashRuntime | undefined) {
	runtime = next;
}

export function getWashRuntime() {
	return runtime;
}
