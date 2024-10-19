# TidyFiles

A powerful command-line interface (CLI) tool built with Node.js to help you organize files in a specified directory based on their file types. This tool simplifies the process of keeping your directories tidy by automatically sorting files into corresponding folders.

## Features

- **Organize Files**: Automatically categorizes files into folders based on their type (e.g., images, documents, audio).
- **Exclude File Types**: Allows users to specify file types that should not be organized.(ongoing)
- **Undo Last Action**: Provides functionality to revert the last organization operation.(ongoing)
- **User-Friendly CLI**: Simple commands to use the tool effectively.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Vkxm/TidyFiles.git
   ```

2. **Navigate to the Directory**:

   ```bash
   cd TidyFiles
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

## Usage

### Organize Files

To organize files in a specified directory, use the following command:

```bash
orgnaize 
```

For example, to organize files in your `Downloads` folder:

```bash
organize home/user/Downloads
```

<!-- ### Exclude a File Type

You can exclude specific file types using the `--exclude` flag:

```bash
node organize.js <directory_path> --exclude <file_extension>
```

For example, to exclude `.txt` files:

```bash
node organize.js ~/Downloads --exclude txt
```

### Undo Last Organization

To undo the last organization action, simply run:

```bash
node organize.js undo
```

This will revert your directory to its previous state before the last organization.

## Examples

1. Organizing files in the `Documents` folder:

   ```bash
   node organize.js ~/Documents
   ```

2. Organizing files while excluding `.mp3` files:

   ```bash
   node organize.js ~/Documents --exclude mp3
   ```

3. Undoing the last organization action in the `Downloads` folder:

   ```bash
   node organize.js undo
   ``` -->

## Contributing

Contributions are welcome! If you have ideas for new features or encounter any issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

