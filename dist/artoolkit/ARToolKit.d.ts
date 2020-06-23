export declare class ARToolKit {
	static AR_DEBUG_DISABLE: number;
	static AR_DEBUG_ENABLE: number;
	static AR_DEFAULT_DEBUG_MODE: number;
	static AR_DEFAULT_IMAGE_PROC_MODE: number;
	static AR_DEFAULT_LABELING_MODE: number;
	static AR_DEFAULT_LABELING_THRESH: number;
	static AR_DEFAULT_MARKER_EXTRACTION_MODE: number;
	static AR_DEFAULT_PATTERN_DETECTION_MODE: number;
	static AR_IMAGE_PROC_FIELD_IMAGE: number;
	static AR_IMAGE_PROC_FRAME_IMAGE: number;
	static AR_LABELING_BLACK_REGION: number;
	static AR_LABELING_THRESH_MODE_AUTO_ADAPTIVE: number;
	static AR_LABELING_THRESH_MODE_AUTO_MEDIAN: number;
	static AR_LABELING_THRESH_MODE_AUTO_OTSU: number;
	static AR_LABELING_THRESH_MODE_MANUAL: number;
	static AR_LABELING_WHITE_REGION: number;
	static AR_LOG_LEVEL_DEBUG: number;
	static AR_LOG_LEVEL_ERROR: number;
	static AR_LOG_LEVEL_INFO: number;
	static AR_LOG_LEVEL_REL_INFO: number;
	static AR_LOG_LEVEL_WARN: number;
	static AR_LOOP_BREAK_THRESH: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_HEURISTIC_TROUBLESOME_MATRIX_CODES: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_MATCH_BARCODE_EDC_FAIL: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_MATCH_BARCODE_NOT_FOUND: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_MATCH_CONFIDENCE: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_MATCH_CONTRAST: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_MATCH_GENERIC: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_NONE: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_PATTERN_EXTRACTION: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_POSE_ERROR: number;
	static AR_MARKER_INFO_CUTOFF_PHASE_POSE_ERROR_MULTI: number;
	static AR_MATRIX_CODE_3x3: number;
	static AR_MATRIX_CODE_3x3_HAMMING63: number;
	static AR_MATRIX_CODE_3x3_PARITY65: number;
	static AR_MATRIX_CODE_4x4: number;
	static AR_MATRIX_CODE_4x4_BCH_13_5_5: number;
	static AR_MATRIX_CODE_4x4_BCH_13_9_3: number;
	static AR_MATRIX_CODE_DETECTION: number;
	static AR_MAX_LOOP_COUNT: number;
	static AR_NOUSE_TRACKING_HISTORY: number;
	static AR_TEMPLATE_MATCHING_COLOR: number;
	static AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX: number;
	static AR_TEMPLATE_MATCHING_MONO: number;
	static AR_TEMPLATE_MATCHING_MONO_AND_MATRIX: number;
	static AR_USE_TRACKING_HISTORY: number;
	static AR_USE_TRACKING_HISTORY_V2: number;
	static HEAPU8: any;
	static UNKNOWN_MARKER: number;
	static PATTERN_MARKER: number;
	static BARCODE_MARKER: number;
	static markerInfo: any;
	static multiEachMarkerInfo: any;
	static setup: (width: number, height: number, cameraParamId: any) => any;
	static teardown: (id: number) => any;
	static setupAR2: () => any;
	static setLogLevel: (mode: any) => any;
	static getLogLevel: () => any;
	static setDebugMode: (id: number, mode: number) => any;
	static getDebugMode: (id: number) => any;
	static getProcessingImage: (id: number) => any;
	static setMarkerInfoDir: (id: number, markerIndex: number, dir: any) => any;
	static setMarkerInfoVertex: (id: number, markerIndex: number) => any;
	static getTransMatSquare: (
		id: number,
		markerUID: number,
		markerWidth: number
	) => any;
	static getTransMatSquareCont: (
		id: any,
		markerUID: number,
		markerWidth: number
	) => any;
	static getTransMatMultiSquare: (id: any, markerUID: number) => any;
	static getTransMatMultiSquareRobust: (id: number, i: number) => any;
	static getMultiMarkerNum: (id: number, multiId: number) => any;
	static getMultiMarkerCount: (id: number) => any;
	static detectMarker: (id: number) => any;
	static getMarkerNum: (id: number) => any;
	static getMarker: (id: number, markerIndex: number) => any;
	static getMultiEachMarker: (
		id: number,
		multiMarkerId: number,
		markerIndex: number
	) => any;
	static detectNFTMarker: (id: number) => any;
	static setProjectionNearPlane: (id: number, value: any) => any;
	static getProjectionNearPlane: (id: number) => any;
	static setProjectionFarPlane: (id: number, value: any) => any;
	static getProjectionFarPlane: (id: number) => any;
	static setThresholdMode: (id: number, mode: any) => any;
	static getThresholdMode: (id: number) => any;
	static setThreshold: (id: number, threshold: number) => any;
	static getThreshold: (id: number) => any;
	static setPatternDetectionMode: (id: number, mode: any) => any;
	static getPatternDetectionMode: (id: number) => any;
	static setMatrixCodeType: (id: number, type: any) => any;
	static getMatrixCodeType: (id: number) => any;
	static setLabelingMode: (id: number, mode: any) => any;
	static getLabelingMode: (id: number) => any;
	static setPattRatio: (id: number, ratio: number) => any;
	static getPattRatio: (id: number) => any;
	static setImageProcMode: (id: number, mode: any) => any;
	static getImageProcMode: (id: number) => any;
	static markerCount: number;
	static multiMarkerCount: number;
	static cameraCount: number;
	static getMarkerInfo(): any;
	static deleteCamera(id: number): void;
	static loadCamera(
		url: string | Uint8Array,
		callback: (id: number) => any,
		onerror: (err: any) => any
	): void;
	static getFrameMalloc(): any;
	static addMarker(
		arId: number,
		url: string,
		callback: (id: number) => any,
		onError: (err: any) => any
	): void;
	static addNFTMarker(
		arId: number,
		url: string,
		callback: (id: number) => any,
		onError: () => any
	): void;
	static bytesToString(array: Uint8Array): any;
	static parseMultiFile(bytes: Uint8Array): any[];
	static addMultiMarker(
		arId: number,
		url: string,
		callback: (id: number, markerNum: any) => any,
		onError: () => any
	): void;
	static writeStringToFS(
		filename: string,
		string: string,
		callback: () => any
	): void;
	static writeByteArrayToFS(
		filename: string,
		byteArray: Uint8Array,
		callback: (byteArray: Uint8Array) => any
	): void;
	static ajax(
		url: string,
		filename: string,
		callback: (bytes: Uint8Array) => any
	): void;
	static ajaxDependencies(files: any[], callback: () => any): void;
}
export default ARToolKit;
