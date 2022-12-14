# jupyterlab-h5web

![Github Actions Status](https://github.com/silx-kit/jupyterlab-h5web/workflows/Build/badge.svg)
[![PyPI version](https://badge.fury.io/py/jupyterlab-h5web.svg)](https://badge.fury.io/py/jupyterlab-h5web)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/silx-kit/jupyterlab-h5web/HEAD?urlpath=lab/tree/example.ipynb)

![Demo](https://user-images.githubusercontent.com/2936402/114533096-d5e68000-9c4d-11eb-81d3-67d313c9216f.gif)

**jupyterlab-h5web** is a JupyterLab extension to explore and visualize HDF5
file contents, using the web-based viewer
[h5web](https://github.com/silx-kit/h5web). h5web supports the
[NeXus](https://www.nexusformat.org/) format.

See [Usage](README.md#Usage) for more details.

## Requirements

- JupyterLab 3

For JupyterLab 2, use the
[0.x versions](https://github.com/silx-kit/jupyterlab-h5web/tree/0.x) of the
extension.

## Install

### With pip

```bash
pip install jupyterlab_h5web
```

To enable support for additional filters such as
[blosc](https://github.com/Blosc/hdf5-blosc) or
[bitshuffle](https://github.com/kiyo-masui/bitshuffle):

```bash
pip install jupyterlab_h5web[full]
```

This will install [hdf5plugin](https://pypi.org/project/hdf5plugin/) in addition
to the extension.

### With conda

```bash
conda install -c conda-forge jupyterlab-h5web
```

## Usage

This extension enables opening HDF5 files in a JupyterLab tab and exploring HDF5
files in Jupyter notebooks.

### In JupyterLab

You can double-click on an HDF5 file or right-click _Open with_ -> _h5web_ to
launch a tab.

This tab is composed of a sidebar, where you can explore the structure of the
HDF5 file, and of a main area where the visualization of the selected entity
takes place. This visualization is controlled by the upper-right button that can
toggle between:

- _Display_: visualize datasets using `Line`, `Heatmap` or `Matrix`
  visualizations.
- _Inspect_: show the metadata and attributes of any entity

### In Jupyter notebooks

To open a HDF5 file with H5Web, use the `H5Web` widget in a notebook cell:

```python
from jupyterlab_h5web import H5Web

H5Web('<path to the HDF5 file>')
```

The cell height can be resized with the handle at the bottom-right.

An example is provided in [example.ipynb](example.ipynb).

### Supported file formats

**jupyter-h5web** detects HDF5 files based on their file extensions. The viewer
works for the following extensions:

- "Classic" HDF5: `.h5`, `.hdf5`
- [NeXus](https://www.nexusformat.org/): `.nexus`, `.nx`, `.nxs`
- [CXI](https://cxidb.org/cxi.html): `.cxi`

For other types of files, you can change the extension to one of the supported
extensions or, if it is widespread,
[open an issue](https://github.com/silx-kit/jupyterlab-h5web/issues) to discuss
its support.

## Changelog

See https://github.com/silx-kit/jupyterlab-h5web/releases.

## Troubleshoot

If the following instructions do not solve your issue, you can open an
[issue on GitHub](https://github.com/silx-kit/jupyterlab-h5web/issues).

### Check the server extension

If you are seeing the frontend extension but it is not working, check that
`jupyterlab_h5web` is installed and enabled.

It should be listed when running:

```bash
jupyter serverextension list
```

If `jupyterlab_h5web` does not appear or is disabled, try to enable it:

```
jupyter serverextension enable jupyterlab_h5web
```

### Check the frontend extension

If `jupyterlab_h5web` is installed and enabled but you are not seeing the
frontend, check the frontend is installed:

```bash
jupyter labextension list
```

## Uninstall

```bash
pip uninstall jupyterlab_h5web
```
