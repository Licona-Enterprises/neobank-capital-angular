// export.service.ts

import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  exportToCsv(data: any[], filename: string): void {
    const csvContent = this.convertArrayToCsv(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, filename);
  }

  private convertArrayToCsv(data: any[]): string {
    const header = this.generateHeader(data[0]);
    const rows = data.map(item => this.convertObjectToString(item, header)).join('\n');
    return header.join(',') + '\n' + rows;
  }

  private convertObjectToString(obj: any, header: string[]): string {
    return header
      .map(key => {
        const nestedKeys = key.split('.');
        let value = obj;
        for (const nestedKey of nestedKeys) {
          value = value ? value[nestedKey] : null;
        }
        return value !== undefined ? String(value) : '';
      })
      .join(',');
  }

  private generateHeader(obj: any, parentKey = ''): string[] {
    return Object.keys(obj).flatMap(key => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        // Recursively generate header for nested objects
        return this.generateHeader(value, fullKey);
      }
      return [fullKey];
    });
  }
}
